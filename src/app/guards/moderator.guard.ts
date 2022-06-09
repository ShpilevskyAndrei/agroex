import { Injectable } from '@angular/core';
import { CanLoad, Router, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { selectUserRole } from '../state/registration-page/registration-page.selectors';

@Injectable({
  providedIn: 'root',
})
export class ModeratorGuard implements CanLoad {
  private role$: Observable<string | undefined>;

  constructor(private store: Store, private router: Router) {
    this.role$ = this.store.select(selectUserRole);
  }

  public isModerator(): Observable<string | undefined> {
    return this.role$.pipe(map((currentRole) => currentRole));
  }

  public canLoad():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.isModerator().pipe(
      map((item: string | undefined): boolean => {
        if (item !== 'moderator') {
          this.router.navigate(['error']);
          return false;
        }

        return true;
      })
    );
  }
}
