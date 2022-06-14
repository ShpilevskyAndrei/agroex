import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { map, tap } from 'rxjs/operators';
import { filter, Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { IAdRequestInterface } from '../../advertisements-list/interfaces/ad-request.interface';
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
import { UserPanelOptionId } from '../../shared/components/header/enums/user-panel-option-id';
import { AppRootActions } from '../../state/app-root/app-root.actions';
import { UserRole } from '../../shared/components/header/enums/user-role';

@Component({
  selector: 'app-advertisement-page-container',
  template: ` <app-advertisement-page
    [user]="user$ | async"
    [userRole]="userRole$ | async"
    [advertisement]="advertisement$ | async"
    [advertisementLoadingStatus]="advertisementLoadingStatus$ | async"
    (logout)="onLogout()"
    (selectTab)="onSelectTab($event)"
  ></app-advertisement-page>`,
})
export class AdvertisementPageContainerComponent implements OnInit, OnDestroy {
  public slug$: Subscription;
  public advertisement$: Observable<IAdRequestInterface | null>;
  public user$: Observable<IUser | null>;
  public userRole$: Observable<UserRole | null>;
  public advertisementLoadingStatus$: Observable<LoadingStatus | null>;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {
    this.user$ = this.store.select(selectUserData);
    this.userRole$ = this.store.select(selectUserRole);
    this.advertisement$ = this.store.select(selectAdvertisementData);
    this.advertisementLoadingStatus$ = this.store.select(
      selectAdvertisementLoadingStatus
    );
  }

  public onLogout(): void {
    this.store.dispatch(RegistrationPageActions.getUserLogout());
  }

  public onSelectTab(selectedOptionId: UserPanelOptionId): void {
    this.store.dispatch(AppRootActions.getUserSelectTab({ selectedOptionId }));
  }

  public ngOnInit(): void {
    this.slug$ = this.route.params
      .pipe(
        filter((params: Params) => !!params?.slug),
        map((params: Params) => params?.slug),
        tap((slug: string) => {
          this.store.dispatch(
            AdvertisementPageActions.getAdvertisementRequest({ slug })
          );
          this.spinner.show();
        })
      )
      .subscribe();
  }

  public ngOnDestroy(): void {
    this.slug$.unsubscribe();
  }
}
