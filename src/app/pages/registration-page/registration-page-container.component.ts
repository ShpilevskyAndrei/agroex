import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadingStatus } from '../../shared/interfaces/loading-status';
import { LoginPageActions } from '../../state/login-page/login-page.actions';
import { selectLoginLoadingStatus } from '../../state/login-page/login-page.selectors';

import { RegistrationPageActions } from '../../state/registration-page/registration-page.actions';
import { selectUserLoadingStatus } from '../../state/registration-page/registration-page.selectors';
import { AuthorizationCombineInfo } from './interfaces/user-api-response.interface';

@Component({
  selector: 'app-registration-page-container',
  template: ` <app-registration-page
    [authorizationLoadingStatus]="authorizationLoadingStatus$ | async"
    (authorizeUser)="onAuthorizeUser($event)"
    [loginLoadingStatus]="loginLoadingStatus$ | async"
    (loginUser)="onLoginUser($event)"
  >
  </app-registration-page>`,
})
export class RegistrationPageContainerComponent {
  public authorizationLoadingStatus$: Observable<LoadingStatus>;
  public loginLoadingStatus$: Observable<LoadingStatus>;

  constructor(private store: Store) {
    this.authorizationLoadingStatus$ = this.store.select(
      selectUserLoadingStatus
    );
    this.authorizationLoadingStatus$ = this.store.select(
      selectLoginLoadingStatus
    );
  }

  public onAuthorizeUser(authorizeUser: AuthorizationCombineInfo): void {
    this.store.dispatch(
      RegistrationPageActions.getUserRequest({
        user: authorizeUser.user,
        url: authorizeUser.url,
      })
    );
  }

  public onLoginUser(loginUser: AuthorizationCombineInfo): void {
    this.store.dispatch(
      LoginPageActions.getLoginRequest({
        user: loginUser.user,
        url: loginUser.url,
      })
    );
  }
}
