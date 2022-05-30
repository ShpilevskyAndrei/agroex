import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { JwtHelperService } from '@auth0/angular-jwt';

import { selectUserToken } from './state/registration-page/registration-page.selectors';
import { RegistrationPageActions } from './state/registration-page/registration-page.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  private token$: Observable<string | undefined>;

  constructor(
    public jwtHelper: JwtHelperService,
    private store: Store,
    private router: Router
  ) {
    this.token$ = this.store.select(selectUserToken);
  }

  public isAuthenticated(): Observable<boolean> {
    return this.token$.pipe(
      map((currentToken) => !this.jwtHelper.isTokenExpired(currentToken))
    );
  }

  public canActivate(
    route: ActivatedRouteSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.isAuthenticated().pipe(
      map((item: boolean): boolean => {
        if (!item) {
          this.router.navigate(['registration']);
          this.store.dispatch(RegistrationPageActions.getUserLogout());
        }

        return route.data.isReverse ? !item : item;
      })
    );
  }
}
