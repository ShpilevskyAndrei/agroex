import { Injectable } from '@angular/core';
import { CanLoad, Router, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { selectUserRole } from '../state/registration-page/registration-page.selectors';
import { UserRole } from '../shared/components/header/enums/user-role';

@Injectable({
  providedIn: 'root',
})
export class ModeratorGuard implements CanLoad {
  private role$: Observable<UserRole>;

  constructor(private store: Store, private router: Router) {
    this.role$ = this.store.select(selectUserRole);
  }

  public canLoad():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.role$.pipe(
      map((role: UserRole): boolean => {
        if (role !== UserRole.Moderator) {
          this.router.navigate(['']);
          return false;
        }
        return true;
      })
    );
  }
}
