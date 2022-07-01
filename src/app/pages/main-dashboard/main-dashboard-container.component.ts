import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat';
import MessagePayload = firebase.messaging.MessagePayload;

import { LoadingStatus } from '../../shared/interfaces/loading-status';
import { AppRootActions } from '../../state/app-root/app-root.actions';
import { getNotificationMessage } from '../../state/app-root/app-root.selectors';
import { MainDashboardActions } from '../../state/main-dashboard/main-dashboard.actions';
import {
  selectCategoriesData,
  selectCategoriesLoadingStatus,
} from '../../state/main-dashboard/main-dashboard.selectors';
import { RegistrationPageActions } from '../../state/registration-page/registration-page.actions';
import {
  selectUserData,
  selectUserRole,
} from '../../state/registration-page/registration-page.selectors';
import { IUser } from '../../shared/interfaces/user.interface';
import { Category } from './categories/interfaces/category.model';
import { IAdvertisementRequestInterface } from '../../shared/components/advertisements-list/interfaces/advertisement-request.interface';
import {
  selectAdvertisementsData,
  selectAdvertisementsLoadingStatus,
  selectCategoryTab,
} from '../../state/advertisements-list-page/advertisements-list-page.selectors';
import {
  AdvertisementsListDealActions,
  AdvertisementsListPageActions,
} from '../../state/advertisements-list-page/advertisements-list-page.actions';
import { UserRole } from '../../shared/components/header/enums/user-role';
import { AccountPageActions } from '../../state/account-page/account-page.actions';
import {
  NOTIFICATION_TYPE_BET,
  NOTIFICATION_TYPE_OUTBIDDING,
  NOTIFICATION_TYPE_REJECTED,
} from '../../shared/constants/notifications-type';
import {
  MY_ADVERTISEMENTS_ACTIVE_TAB,
  MY_ADVERTISEMENTS_PENDING_TAB,
} from '../account-page/my-advertisements/constants/my-advertisements-tab-options';
import { BETTING_OUTBID_TAB } from '../account-page/my-betting/constants/my-betting-tab-options';

@Component({
  selector: 'app-main-dashboard-container',
  template: ` <app-main-dashboard
    [categories]="categories$ | async"
    [categoriesLoadingStatus]="categoriesLoadingStatus$ | async"
    [user]="user$ | async"
    [userRole]="userRole$ | async"
    [advertisementsRequest]="advertisementsRequest$ | async"
    [notificationMessage]="notificationMessage$ | async"
    [advertisementsLoadingStatus]="advertisementsLoadingStatus$ | async"
    [selectCategoryTabTitle]="selectCategoryTab$ | async"
    (logout)="onLogout()"
    (setBet)="onSetBet($event)"
    (setBuy)="onSetBuy($event)"
    (selectTab)="onSelectTab($event)"
    (selectCategoryTab)="onSelectCategoryTab($event)"
    (addNotificationMessage)="onAddNotificationMessage($event)"
    (changeNotificationStatus)="onClickNotification($event)"
  ></app-main-dashboard>`,
})
export class MainDashboardContainerComponent implements OnInit {
  public categories$: Observable<Category[] | null>;
  public categoriesLoadingStatus$: Observable<LoadingStatus | null>;
  public user$: Observable<IUser | null>;
  public userRole$: Observable<UserRole | null>;
  public advertisementsRequest$: Observable<IAdvertisementRequestInterface | null>;
  public advertisementsLoadingStatus$: Observable<LoadingStatus | null>;
  public selectCategoryTab$: Observable<string | null>;
  public notificationMessage$: Observable<MessagePayload[] | null>;

  constructor(private store: Store, private spinner: NgxSpinnerService) {
    this.categories$ = this.store.select(selectCategoriesData);
    this.user$ = this.store.select(selectUserData);
    this.userRole$ = this.store.select(selectUserRole);
    this.categoriesLoadingStatus$ = this.store.select(
      selectCategoriesLoadingStatus
    );
    this.advertisementsRequest$ = this.store.select(selectAdvertisementsData);
    this.advertisementsLoadingStatus$ = this.store.select(
      selectAdvertisementsLoadingStatus
    );
    this.selectCategoryTab$ = this.store.select(selectCategoryTab);
    this.notificationMessage$ = this.store.select(getNotificationMessage);
  }

  public ngOnInit(): void {
    this.store.dispatch(MainDashboardActions.getCategoriesRequest());
    this.store.dispatch(
      AdvertisementsListPageActions.getAdvertisementsRequest()
    );
    this.spinner.show();
  }

  public onLogout(): void {
    this.store.dispatch(RegistrationPageActions.getUserLogout());
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

  public onBetTimerDown(slug: string): void {
    this.store.dispatch(
      AdvertisementsListDealActions.getAdvertisementsBetExpired({ slug })
    );
  }

  public onSelectTab(selectedOptionId: string): void {
    this.store.dispatch(AppRootActions.getUserSelectTab({ selectedOptionId }));
  }

  public onAddNotificationMessage(message: MessagePayload): void {
    this.store.dispatch(AppRootActions.getNotificationMessage({ message }));
  }

  public onSelectCategoryTab(selectedOptionId: string): void {
    this.store.dispatch(
      AdvertisementsListPageActions.getCategoryTabRequest({ selectedOptionId })
    );
    this.store.dispatch(
      AdvertisementsListPageActions.getAdvertisementsRequest()
    );
    this.spinner.show();
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
