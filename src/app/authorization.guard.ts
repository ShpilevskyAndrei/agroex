import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';

import { selectUserToken } from './state/registration-page/registration-page.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationGuard implements CanActivate {
  public token$: Observable<string | undefined>;

  constructor(public jwtHelper: JwtHelperService, private store: Store) {
    this.token$ = this.store.select(selectUserToken);
  }

  public isAuthorization(): Observable<boolean> {
    return this.token$.pipe(
      map((currentToken) => !this.jwtHelper.isTokenExpired(currentToken))
    );
  }

  public canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.isAuthorization().pipe(tap((item) => !item));
  }
}
