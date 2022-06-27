import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

import { LoadingStatus } from '../../shared/interfaces/loading-status';
import { IUser } from '../../shared/interfaces/user.interface';
import { RegistrationPageActions } from '../../state/registration-page/registration-page.actions';
import {
  selectUserData,
  selectUserRole,
} from '../../state/registration-page/registration-page.selectors';
import { IAdvertisementRequestInterface } from '../../shared/components/advertisements-list/interfaces/advertisement-request.interface';
import { IAdvertisementModerationRequest } from './interfaces/advertisement.interface';
import { UserRole } from '../../shared/components/header/enums/user-role';
import {
  selectModerationAdvertisementsData,
  selectModerationAdvertisementsLoadingStatus,
} from '../../state/moderation-advertisements/moderation-advertisements.selectors';
import { ModerationAdvertisementsActions } from '../../state/moderation-advertisements/moderation-advertisements.actions';

@Component({
  selector: 'app-moderation-advertisements-page-container',
  template: ` <app-moderation-advertisements
    [user]="user$ | async"
    [userRole]="userRole$ | async"
    [advertisementsRequest]="advertisementsRequest$ | async"
    [advertisementsLoadingStatus]="advertisementsLoadingStatus$ | async"
    (logout)="onLogout()"
    (moderationDecision)="onModerationDecision($event)"
    (reloadModerationPage)="onClickreloadModerationPage()"
  ></app-moderation-advertisements>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModerationadvertisementsContainerComponent implements OnInit {
  public user$: Observable<IUser | null>;
  public userRole$: Observable<UserRole | null>;
  public createAdvertisementLoadingStatus$: Observable<LoadingStatus>;
  public advertisementsRequest$: Observable<IAdvertisementRequestInterface | null>;
  public advertisementsLoadingStatus$: Observable<LoadingStatus | null>;

  constructor(private store: Store, private spinner: NgxSpinnerService) {
    this.user$ = this.store.select(selectUserData);
    this.userRole$ = this.store.select(selectUserRole);
    this.advertisementsRequest$ = this.store.select(
      selectModerationAdvertisementsData
    );
    this.advertisementsLoadingStatus$ = this.store.select(
      selectModerationAdvertisementsLoadingStatus
    );
  }

  public onLogout(): void {
    this.store.dispatch(RegistrationPageActions.getUserLogout());
  }

  public onClickreloadModerationPage(): void {
    this.store.dispatch(
      ModerationAdvertisementsActions.getNonModerationAdvertisementsRequest()
    );
  }

  public ngOnInit(): void {
    this.store.dispatch(
      ModerationAdvertisementsActions.getNonModerationAdvertisementsRequest()
    );
    this.spinner.show();
  }

  public onModerationDecision(
    moderationDecision: IAdvertisementModerationRequest
  ): void {
    this.store.dispatch(
      ModerationAdvertisementsActions.getDecisionNonModerationAdvertisementsRequest(
        {
          decision: moderationDecision,
        }
      )
    );
  }
}
