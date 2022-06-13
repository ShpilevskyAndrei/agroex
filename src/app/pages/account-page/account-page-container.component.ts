import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { RegistrationPageActions } from '../../state/registration-page/registration-page.actions';
import { selectUserData } from '../../state/registration-page/registration-page.selectors';
import { IUser } from '../../shared/interfaces/user.interface';
import { AdvertisementsListPageActions } from '../../state/advertisements-list-page/advertisements-list-page.actions';
import { IAdvertisementRequestInterface } from '../../advertisements-list/interfaces/advertisement-request.interface';
import { LoadingStatus } from '../../shared/interfaces/loading-status';
import {
  selectAdvertisementsData,
  selectAdvertisementsLoadingStatus,
} from '../../state/advertisements-list-page/advertisements-list-page.selectors';

@Component({
  selector: 'app-account-page-container',
  template: ` <app-account-page
    [user]="user$ | async"
    [advertisementsRequest]="advertisementsRequest$ | async"
    [advertisementsLoadingStatus]="advertisementsLoadingStatus$ | async"
    (logout)="onLogout()"
  ></app-account-page>`,
})
export class AccountPageContainerComponent implements OnInit {
  public user$: Observable<IUser | null>;
  public advertisementsRequest$: Observable<IAdvertisementRequestInterface | null>;
  public advertisementsLoadingStatus$: Observable<LoadingStatus | null>;

  constructor(private store: Store) {
    this.user$ = this.store.select(selectUserData);
    this.advertisementsRequest$ = this.store.select(selectAdvertisementsData);
    this.advertisementsLoadingStatus$ = this.store.select(
      selectAdvertisementsLoadingStatus
    );
  }

  public ngOnInit(): void {
    this.store.dispatch(
      AdvertisementsListPageActions.getAdvertisementsRequest()
    );
  }

  public onLogout(): void {
    this.store.dispatch(RegistrationPageActions.getUserLogout());
  }
}
