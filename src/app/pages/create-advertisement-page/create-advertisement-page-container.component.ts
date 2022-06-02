import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadingStatus } from '../../shared/interfaces/loading-status';

import { CreateAdvertisementPageActions } from '../../state/create-advertisement-page/create-advertisement-page.actions';

import { RegistrationPageActions } from '../../state/registration-page/registration-page.actions';
import {
  selectUserData,
  selectUserLoadingStatus,
} from '../../state/registration-page/registration-page.selectors';
import { IUser } from '../registration-page/interfaces/user-api-response.interface';

@Component({
  selector: 'app-create-advertisement-page-container',
  template: ` <app-create-advertisement-page
    [user]="user$ | async"
    (logout)="onLogout()"
    [createAdvertisementLoadingStatus]="
      createAdvertisementLoadingStatus$ | async
    "
    (formAdvertisement)="onSubmitAdvertisementFormData($event)"
  ></app-create-advertisement-page>`,
})
export class CreateAdvertisementPageContainerComponent {
  public user$: Observable<IUser | null>;
  public createAdvertisementLoadingStatus$: Observable<LoadingStatus>;

  constructor(private store: Store) {
    this.user$ = this.store.select(selectUserData);
    this.createAdvertisementLoadingStatus$ = this.store.select(
      selectUserLoadingStatus
    );
  }

  public onLogout(): void {
    this.store.dispatch(RegistrationPageActions.getUserLogout());
  }

  public onSubmitAdvertisementFormData(formAdvertisement: FormData): void {
    this.store.dispatch(
      CreateAdvertisementPageActions.createAdvertisementRequest({
        formAdvertisement,
      })
    );
  }
}
