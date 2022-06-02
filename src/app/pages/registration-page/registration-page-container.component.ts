import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { LoadingStatus } from '../../shared/interfaces/loading-status';
import { RegistrationPageActions } from '../../state/registration-page/registration-page.actions';
import { selectUserLoadingStatus } from '../../state/registration-page/registration-page.selectors';
import { AuthorizationCombineInfo } from '../../shared/interfaces/user.interface';

@Component({
  selector: 'app-registration-page-container',
  template: ` <app-registration-page
    [authorizationLoadingStatus]="authorizationLoadingStatus$ | async"
    (authorizationCombineInfo)="onAuthorizeUser($event)"
  >
  </app-registration-page>`,
})
export class RegistrationPageContainerComponent {
  public authorizationLoadingStatus$: Observable<LoadingStatus>;

  constructor(private store: Store) {
    this.authorizationLoadingStatus$ = this.store.select(
      selectUserLoadingStatus
    );
  }

  public onAuthorizeUser(
    authorizationCombineInfo: AuthorizationCombineInfo
  ): void {
    this.store.dispatch(
      RegistrationPageActions.getUserRequest({
        user: authorizationCombineInfo.user,
        url: authorizationCombineInfo.url,
      })
    );
  }
}
