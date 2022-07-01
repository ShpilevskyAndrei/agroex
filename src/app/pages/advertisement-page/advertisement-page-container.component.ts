import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { map, tap } from 'rxjs/operators';
import { filter, Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import firebase from 'firebase/compat';
import MessagePayload = firebase.messaging.MessagePayload;

import { LoadingStatus } from '../../shared/interfaces/loading-status';
import { AdvertisementPageActions } from '../../state/advertisement-page/advertisement-page.actions';
import { IUser } from '../../shared/interfaces/user.interface';
import {
  selectAdvertisementData,
  selectAdvertisementLoadingStatus,
} from '../../state/advertisement-page/advertisement-page.selectors';
import {
  selectUserData,
  selectUserRole,
} from '../../state/registration-page/registration-page.selectors';
import { RegistrationPageActions } from '../../state/registration-page/registration-page.actions';
import { AppRootActions } from '../../state/app-root/app-root.actions';
import { UserRole } from '../../shared/components/header/enums/user-role';
import { AdvertisementsListDealActions } from '../../state/advertisements-list-page/advertisements-list-page.actions';
import { IAdRequestInterface } from '../../shared/components/advertisements-list/interfaces/ad-request.interface';
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

@UntilDestroy()
@Component({
  selector: 'app-advertisement-page-container',
  template: ` <app-advertisement-page
    [user]="user$ | async"
    [userRole]="userRole$ | async"
    [advertisement]="advertisement$ | async"
    [advertisementLoadingStatus]="advertisementLoadingStatus$ | async"
    [notificationMessage]="notificationMessage$ | async"
    [map]="map$ | async"
    (logout)="onLogout()"
    (selectTab)="onSelectTab($event)"
    (setBet)="onSetBet($event)"
    (setBuy)="onSetBuy($event)"
    (addNotificationMessage)="onAddNotificationMessage($event)"
    (changeNotificationStatus)="onClickNotification($event)"
  ></app-advertisement-page>`,
})
export class AdvertisementPageContainerComponent implements OnInit {
  public slug$: Subscription;
  public advertisement$: Observable<IAdRequestInterface | null>;
  public user$: Observable<IUser | null>;
  public userRole$: Observable<UserRole | null>;
  public advertisementLoadingStatus$: Observable<LoadingStatus | null>;
  public map$: Observable<GeoJSON.FeatureCollection<GeoJSON.MultiPolygon> | null>;
  public notificationMessage$: Observable<MessagePayload[] | null>;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {
    this.map$ = this.store.select(selectMapData);
    this.user$ = this.store.select(selectUserData);
    this.userRole$ = this.store.select(selectUserRole);
    this.advertisement$ = this.store.select(selectAdvertisementData);
    this.advertisementLoadingStatus$ = this.store.select(
      selectAdvertisementLoadingStatus
    );
    this.notificationMessage$ = this.store.select(getNotificationMessage);
  }

  public onLogout(): void {
    this.store.dispatch(RegistrationPageActions.getUserLogout());
  }

  public onSelectTab(selectedOptionId: string): void {
    this.store.dispatch(AppRootActions.getUserSelectTab({ selectedOptionId }));
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
    this.router.navigate(['']);
  }

  public ngOnInit(): void {
    this.slug$ = this.route.params
      .pipe(
        filter((params: Params) => !!params?.slug),
        map((params: Params) => params.slug),
        tap((slug: string) => {
          this.store.dispatch(
            AdvertisementPageActions.getAdvertisementRequest({ slug })
          );
          this.spinner.show();
        }),
        untilDestroyed(this)
      )
      .subscribe();
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
