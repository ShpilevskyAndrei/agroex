import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat';
import MessagePayload = firebase.messaging.MessagePayload;

import { UserPanelOptionId } from '../../shared/components/header/enums/user-panel-option-id';
import { AccountPageActions } from '../../state/account-page/account-page.actions';
import {
  selectMyAdvertisementsData,
  selectMyAdvertisementsLoadingStatus,
  selectMyOrdersData,
  selectMyOrdersLoadingStatus,
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

@Component({
  selector: 'app-account-page-container',
  template: ` <app-account-page
    [user]="user$ | async"
    [userRole]="userRole$ | async"
    [selectedTab]="selectedTab$ | async"
    [myAdvertisementsRequest]="myAdvertisementsRequest$ | async"
    [myAdvertisementsLoadingStatus]="myAdvertisementsLoadingStatus$ | async"
    [myOrdersRequest]="myOrdersRequest$ | async"
    [myOrdersLoadingStatus]="myOrdersLoadingStatus$ | async"
    [notificationMessage]="notificationMessage$ | async"
    (logout)="onLogout()"
    (selectTab)="onSelectTab($event)"
    (dispatcher)="onDispatcher($event)"
    (confirmDeal)="onConfirmDeal($event)"
    (addNotificationMessage)="onAddNotificationMessage($event)"
  ></app-account-page>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountPageContainerComponent {
  public user$: Observable<IUser | null>;
  public userRole$: Observable<UserRole | null>;
  public selectedTab$: Observable<string | null>;
  public myAdvertisementsRequest$: Observable<IAdvertisementRequestInterface | null>;
  public myAdvertisementsLoadingStatus$: Observable<LoadingStatus | null>;
  public myOrdersRequest$: Observable<IMyOrdersInterface[] | null>;
  public myOrdersLoadingStatus$: Observable<LoadingStatus | null>;
  public notificationMessage$: Observable<MessagePayload[] | null>;

  constructor(private store: Store) {
    this.user$ = this.store.select(selectUserData);
    this.userRole$ = this.store.select(selectUserRole);
    this.selectedTab$ = this.store.select(selectAppRootOptionId);
    this.myAdvertisementsRequest$ = this.store.select(
      selectMyAdvertisementsData
    );
    this.myAdvertisementsLoadingStatus$ = this.store.select(
      selectMyAdvertisementsLoadingStatus
    );
    this.myOrdersRequest$ = this.store.select(selectMyOrdersData);
    this.myOrdersLoadingStatus$ = this.store.select(
      selectMyOrdersLoadingStatus
    );
    this.notificationMessage$ = this.store.select(getNotificationMessage);
  }

  public onLogout(): void {
    this.store.dispatch(RegistrationPageActions.getUserLogout());
  }

  public onSelectTab(selectedOptionId: UserPanelOptionId): void {
    this.store.dispatch(AppRootActions.getUserSelectTab({ selectedOptionId }));
  }

  public onDispatcher(dispatcher: Function): void {
    this.store.dispatch(dispatcher());
  }

  public onConfirmDeal(slug: string): void {
    this.store.dispatch(AccountPageActions.getConfirmDealRequest({ slug }));
  }

  public onAddNotificationMessage(message: MessagePayload): void {
    this.store.dispatch(AppRootActions.getNotificationMessage({ message }));
  }
}
