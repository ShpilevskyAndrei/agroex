import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat';
import MessagePayload = firebase.messaging.MessagePayload;

import { AccountPageActions } from '../../state/account-page/account-page.actions';
import {
  selectMyAdvertisementsData,
  selectMyAdvertisementsLoadingStatus,
  selectMyBettingsLoadingStatus,
  selectMyBettingsData,
  selectMyOrdersData,
  selectMyOrdersLoadingStatus,
  selectMyAdvertisementTab,
  selectMyBettingTab,
} from '../../state/account-page/account-page.selectors';
import { AppRootActions } from '../../state/app-root/app-root.actions';
import { RegistrationPageActions } from '../../state/registration-page/registration-page.actions';
import {
  selectUserData,
  selectUserRole,
} from '../../state/registration-page/registration-page.selectors';
import { IUser } from '../../shared/interfaces/user.interface';
import {
  getNotificationMessage,
  selectAppRootOptionId,
} from '../../state/app-root/app-root.selectors';
import { UserRole } from '../../shared/components/header/enums/user-role';
import { IAdvertisementRequestInterface } from '../../shared/components/advertisements-list/interfaces/advertisement-request.interface';
import { LoadingStatus } from '../../shared/interfaces/loading-status';
import { IMyOrdersInterface } from './my-orders/interfaces/my-orders-request.interface';
import { IAdvertisementInterface } from '../../shared/components/advertisements-list/interfaces/advertisement.interface';
import { AdvertisementsListDealActions } from 'src/app/state/advertisements-list-page/advertisements-list-page.actions';
import {
  NOTIFICATION_TYPE_BET,
  NOTIFICATION_TYPE_OUTBIDDING,
  NOTIFICATION_TYPE_REJECTED,
} from '../../shared/constants/notifications-type';
import { BETTING_OUTBID_TAB } from './my-betting/constants/my-betting-tab-options';
import {
  MY_ADVERTISEMENTS_ACTIVE_TAB,
  MY_ADVERTISEMENTS_PENDING_TAB,
} from './my-advertisements/constants/my-advertisements-tab-options';

@Component({
  selector: 'app-account-page-container',
  template: ` <app-account-page
    [user]="user$ | async"
    [userRole]="userRole$ | async"
    [selectedTab]="selectedTab$ | async"
    [myAdvertisementsRequest]="myAdvertisementsRequest$ | async"
    [myAdvertisementsLoadingStatus]="myAdvertisementsLoadingStatus$ | async"
    [myBettingsRequest]="myBettingsRequest$ | async"
    [myBettingsLoadingStatus]="myBettingsLoadingStatus$ | async"
    [myOrdersRequest]="myOrdersRequest$ | async"
    [myOrdersLoadingStatus]="myOrdersLoadingStatus$ | async"
    [notificationMessage]="notificationMessage$ | async"
    [selectMyAdvertisementTabTitle]="selectMyAdvertisementTab$ | async"
    [selectMyBettingTabTitle]="selectMyBettingTab$ | async"
    (logout)="onLogout()"
    (setBet)="onSetBet($event)"
    (setBuy)="onSetBuy($event)"
    (selectTab)="onSelectTab($event)"
    (dispatcher)="onDispatcher($event)"
    (confirmDeal)="onConfirmDeal($event)"
    (addNotificationMessage)="onAddNotificationMessage($event)"
    (selectMyAdvertisementsTab)="onSelectMyAdvertisementTab($event)"
    (changeNotificationStatus)="onClickNotification($event)"
    (selectMyBettingTab)="onSelectMyBettingTab($event)"
  ></app-account-page>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountPageContainerComponent {
  public user$: Observable<IUser | null>;
  public userRole$: Observable<UserRole | null>;
  public selectedTab$: Observable<string | null>;
  public myAdvertisementsRequest$: Observable<IAdvertisementRequestInterface | null>;
  public myAdvertisementsLoadingStatus$: Observable<LoadingStatus | null>;
  public myBettingsRequest$: Observable<IAdvertisementRequestInterface | null>;
  public myBettingsLoadingStatus$: Observable<LoadingStatus | null>;
  public myOrdersRequest$: Observable<IMyOrdersInterface[] | null>;
  public myOrdersLoadingStatus$: Observable<LoadingStatus | null>;
  public notificationMessage$: Observable<MessagePayload[] | null>;
  public selectMyAdvertisementTab$: Observable<string | null>;
  public selectMyBettingTab$: Observable<string | null>;

  constructor(private store: Store, private spinner: NgxSpinnerService) {
    this.user$ = this.store.select(selectUserData);
    this.userRole$ = this.store.select(selectUserRole);
    this.selectedTab$ = this.store.select(selectAppRootOptionId);
    this.myAdvertisementsRequest$ = this.store.select(
      selectMyAdvertisementsData
    );
    this.myAdvertisementsLoadingStatus$ = this.store.select(
      selectMyAdvertisementsLoadingStatus
    );
    this.myBettingsRequest$ = this.store.select(selectMyBettingsData);
    this.myBettingsLoadingStatus$ = this.store.select(
      selectMyBettingsLoadingStatus
    );
    this.myOrdersRequest$ = this.store.select(selectMyOrdersData);
    this.myOrdersLoadingStatus$ = this.store.select(
      selectMyOrdersLoadingStatus
    );
    this.notificationMessage$ = this.store.select(getNotificationMessage);
    this.selectMyAdvertisementTab$ = this.store.select(
      selectMyAdvertisementTab
    );
    this.selectMyBettingTab$ = this.store.select(selectMyBettingTab);
  }

  public onLogout(): void {
    this.store.dispatch(RegistrationPageActions.getUserLogout());
  }

  public onSelectTab(selectedOptionId: string): void {
    this.store.dispatch(AppRootActions.getUserSelectTab({ selectedOptionId }));
  }

  public onDispatcher(dispatcher: Function): void {
    this.store.dispatch(dispatcher());
    this.spinner.show();
  }

  public onConfirmDeal(advertisement: IAdvertisementInterface): void {
    this.store.dispatch(
      AccountPageActions.getConfirmDealRequest({ advertisement })
    );
  }

  public onSetBet(newBetOptions: Record<string, string | number>): void {
    this.store.dispatch(
      AdvertisementsListDealActions.getAdvertisementsBetRequest({
        newBetOptions,
      })
    );
  }

  public onSetBuy(buyOptions: Record<string, string>): void {
    this.store.dispatch(
      AdvertisementsListDealActions.getAdvertisementsBuyRequest({ buyOptions })
    );
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

  public onSelectMyAdvertisementTab(
    selectedMyAdvertisementOptionTab: string
  ): void {
    this.store.dispatch(
      AccountPageActions.getMyAdvertisementTabRequest({
        selectedMyAdvertisementOptionTab,
      })
    );
    this.store.dispatch(AccountPageActions.getMyAdvertisementsRequest());
    this.spinner.show();
  }

  public onSelectMyBettingTab(selectedMyBettingOptionTab: string): void {
    this.store.dispatch(
      AccountPageActions.getMyBettingTabRequest({
        selectedMyBettingOptionTab,
      })
    );
    this.store.dispatch(AccountPageActions.getMyBettingsRequest());
    this.spinner.show();
  }
}
