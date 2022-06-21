import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { filter, Observable, tap } from 'rxjs';

import { AppRootActions } from './state/app-root/app-root.actions';
import { RegistrationPageActions } from './state/registration-page/registration-page.actions';
import { selectUserToken } from './state/registration-page/registration-page.selectors';

@UntilDestroy()
@Component({
  selector: 'app-root-container',
  template: ` <app-root></app-root>`,
})
export class AppContainerComponent implements OnInit {
  private token$: Observable<string | undefined>;

  constructor(
    private store: Store,
    private jwtHelper: JwtHelperService,
    private router: Router
  ) {
    this.token$ = this.store.select(selectUserToken);
  }

  public isAuthenticated(): Observable<string> {
    return this.token$.pipe(
      untilDestroyed(this),
      tap((currentToken: string | undefined) => {
        if (!currentToken) {
          return null;
        }

        if (this.jwtHelper.isTokenExpired(currentToken)) {
          console.log('=========> ++++++');
          this.store.dispatch(RegistrationPageActions.getUserLogout());
          this.router.navigate(['registration']);
          return null;
        }
        return currentToken;
      }),
      filter(Boolean)
    );
  }

  public ngOnInit(): void {
    this.store.dispatch(AppRootActions.getMapRequest());
    this.isAuthenticated().subscribe((value: string) => {
      console.log(moment(this.jwtHelper.getTokenExpirationDate(value)));
      setTimeout(() => {
        console.log(moment(this.jwtHelper.getTokenExpirationDate(value)));
        this.store.dispatch(RegistrationPageActions.getUserLogout());
      }, moment(this.jwtHelper.getTokenExpirationDate(value)).diff(moment(), 'seconds', true) * 1000);
    });
  }
}
