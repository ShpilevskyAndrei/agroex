import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat';
import MessagePayload = firebase.messaging.MessagePayload;

import { LoadingStatus } from '../../shared/interfaces/loading-status';
import { IUser } from '../../shared/interfaces/user.interface';
import { AppRootActions } from '../../state/app-root/app-root.actions';
import { CreateAdvertisementPageActions } from '../../state/create-advertisement-page/create-advertisement-page.actions';
import { selectCreateAdvertisementLoadingStatus } from '../../state/create-advertisement-page/create-advertisement-page.selectors';
import { RegistrationPageActions } from '../../state/registration-page/registration-page.actions';
import {
  selectUserData,
  selectUserRole,
} from '../../state/registration-page/registration-page.selectors';
import { UserRole } from '../../shared/components/header/enums/user-role';
import {
  getNotificationMessage,
  selectMapData,
} from '../../state/app-root/app-root.selectors';
import { AccountPageActions } from '../../state/account-page/account-page.actions';
import {
  NOTIFICATION_TYPE_BET,
  NOTIFICATION_TYPE_OUTBIDDING,
  NOTIFICATION_TYPE_REJECTED,
} from '../../shared/constants/notifications-type';
import { BETTING_OUTBID_TAB } from '../account-page/my-betting/constants/my-betting-tab-options';
import {
  MY_ADVERTISEMENTS_ACTIVE_TAB,
  MY_ADVERTISEMENTS_PENDING_TAB,
} from '../account-page/my-advertisements/constants/my-advertisements-tab-options';

@Component({
  selector: 'app-create-advertisement-page-container',
  template: ` <app-create-advertisement-page
    [user]="user$ | async"
    [userRole]="userRole$ | async"
    [createAdvertisementLoadingStatus]="
      createAdvertisementLoadingStatus$ | async
    "
    [notificationMessage]="notificationMessage$ | async"
    [map]="map$ | async"
    (logout)="onLogout()"
    (formAdvertisement)="onSubmitAdvertisementFormData($event)"
    (dropLoadingStatus)="onDropLoadingStatus()"
    (selectTab)="onSelectTab($event)"
    (addNotificationMessage)="onAddNotificationMessage($event)"
    (changeNotificationStatus)="onClickNotification($event)"
  ></app-create-advertisement-page>`,
})
export class CreateAdvertisementPageContainerComponent implements OnInit {
  public user$: Observable<IUser | null>;
  public userRole$: Observable<UserRole | null>;
  public createAdvertisementLoadingStatus$: Observable<LoadingStatus>;
  public map$: Observable<GeoJSON.FeatureCollection<GeoJSON.MultiPolygon> | null>;
  public notificationMessage$: Observable<MessagePayload[] | null>;

  constructor(private store: Store, private spinner: NgxSpinnerService) {
    this.user$ = this.store.select(selectUserData);
    this.userRole$ = this.store.select(selectUserRole);
    this.map$ = this.store.select(selectMapData);
    this.createAdvertisementLoadingStatus$ = this.store.select(
      selectCreateAdvertisementLoadingStatus
    );
    this.notificationMessage$ = this.store.select(getNotificationMessage);
  }

  public ngOnInit(): void {
    this.spinner.show();
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

  public onDropLoadingStatus(): void {
    this.store.dispatch(
      CreateAdvertisementPageActions.dropAdvertisementLoadingStatus()
    );
  }

  public onSelectTab(selectedOptionId: string): void {
    this.store.dispatch(AppRootActions.getUserSelectTab({ selectedOptionId }));
  }

  public onAddNotificationMessage(message: MessagePayload): void {
    this.store.dispatch(AppRootActions.getNotificationMessage({ message }));
  }

  public onClickNotification(message: MessagePayload): void {
    switch (message.data?.type) {
      case NOTIFICATION_TYPE_OUTBIDDING:
        this.store.dispatch(
          AccountPageActions.getMyBettingTabRequest({
            selectedMyBettingOptionTab: BETTING_OUTBID_TAB,
          })
        );
        this.store.dispatch(AccountPageActions.getMyBettingsRequest());
        this.spinner.show();

        break;
      case NOTIFICATION_TYPE_BET:
        this.store.dispatch(
          AccountPageActions.getMyAdvertisementTabRequest({
            selectedMyAdvertisementOptionTab: MY_ADVERTISEMENTS_ACTIVE_TAB,
          })
        );
        this.store.dispatch(AccountPageActions.getMyAdvertisementsRequest());
        this.spinner.show();

        break;
      case NOTIFICATION_TYPE_REJECTED:
        this.store.dispatch(
          AccountPageActions.getMyAdvertisementTabRequest({
            selectedMyAdvertisementOptionTab: MY_ADVERTISEMENTS_PENDING_TAB,
          })
        );
        this.store.dispatch(AccountPageActions.getMyAdvertisementsRequest());
        this.spinner.show();

        break;
    }

    this.store.dispatch(AppRootActions.changeNotificationStatus({ message }));
  }
}
