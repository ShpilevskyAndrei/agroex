import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Store } from '@ngrx/store';

import { selectUserToken } from '../state/registration-page/registration-page.selectors';
import { RegistrationPageActions } from '../state/registration-page/registration-page.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
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

  public canLoad(
    route: Route
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.isAuthenticated().pipe(
      map((item: boolean): boolean => {
        if (!item && !route.data?.isRegistrationPage) {
          this.router.navigate(['registration']);
          this.store.dispatch(RegistrationPageActions.getUserLogout());
          return false;
        }

        if (item && route.data?.isRegistrationPage) {
          this.router.navigate(['']);
          return false;
        }

        return true;
      })
    );
  }
}
