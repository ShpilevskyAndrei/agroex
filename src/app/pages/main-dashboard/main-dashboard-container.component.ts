import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';

import { LoadingStatus } from '../../shared/interfaces/loading-status';
import { MainDashboardActions } from '../../state/main-dashboard/main-dashboard.actions';
import {
  selectCategoriesData,
  selectCategoriesLoadingStatus,
} from '../../state/main-dashboard/main-dashboard.selectors';
import { RegistrationPageActions } from '../../state/registration-page/registration-page.actions';
import { selectUserData } from '../../state/registration-page/registration-page.selectors';
import { IUser } from '../../shared/interfaces/user.interface';
import { Category } from './categories/interfaces/category.model';
import { IAdvertisementRequestInterface } from '../../advertisements-list/interfaces/advertisement-request.interface';
import {
  selectAdvertisementsData,
  selectAdvertisementsLoadingStatus,
} from '../../state/advertisements-list-page/advertisements-list-page.selectors';
import { AdvertisementsListPageActions } from '../../state/advertisements-list-page/advertisements-list-page.actions';

@Component({
  selector: 'app-main-dashboard-container',
  template: ` <app-main-dashboard
    [categories]="categories$ | async"
    [categoriesLoadingStatus]="categoriesLoadingStatus$ | async"
    [user]="user$ | async"
    [advertisementsRequest]="advertisementsRequest$ | async"
    [advertisementsLoadingStatus]="advertisementsLoadingStatus$ | async"
    (logout)="onLogout()"
  ></app-main-dashboard>`,
})
export class MainDashboardContainerComponent implements OnInit {
  public categories$: Observable<Category[] | null>;
  public categoriesLoadingStatus$: Observable<LoadingStatus | null>;
  public user$: Observable<IUser | null>;
  public advertisementsRequest$: Observable<IAdvertisementRequestInterface | null>;
  public advertisementsLoadingStatus$: Observable<LoadingStatus | null>;

  constructor(private store: Store, private spinner: NgxSpinnerService) {
    this.categories$ = this.store.select(selectCategoriesData);
    this.user$ = this.store.select(selectUserData);
    this.categoriesLoadingStatus$ = this.store.select(
      selectCategoriesLoadingStatus
    );
    this.advertisementsRequest$ = this.store.select(selectAdvertisementsData);
    this.advertisementsLoadingStatus$ = this.store.select(
      selectAdvertisementsLoadingStatus
    );
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
}
