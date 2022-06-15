import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { LoadingStatus } from '../../shared/interfaces/loading-status';
import { IUser } from '../../shared/interfaces/user.interface';
import { RegistrationPageActions } from '../../state/registration-page/registration-page.actions';
import {
  selectUserData,
  selectUserRole,
} from '../../state/registration-page/registration-page.selectors';
import { IAdvertisementRequestInterface } from '../../shared/components/advertisements-list/interfaces/advertisement-request.interface';
import { ModerateAdvertisementsListPageActions } from '../../state/moderation-advertisements-list/advertisements-list-page.actions';
import { IAdvertisementModerationRequest } from './interfaces/advertisement.interface';
import {
  selectModerateAdvertisementsData,
  selectModerateAdvertisementsLoadingStatus,
} from '../../state/moderation-advertisements-list/advertisements-list-page.selectors';
import { UserRole } from '../../shared/components/header/enums/user-role';

@Component({
  selector: 'app-moderation-advertisements-page-container',
  template: ` <app-moderation-advertisements
    [user]="user$ | async"
    [userRole]="userRole$ | async"
    [advertisementsRequest]="advertisementsRequest$ | async"
    [advertisementsLoadingStatus]="advertisementsLoadingStatus$ | async"
    (logout)="onLogout()"
    (moderationDecision)="onModerationDecision($event)"
  ></app-moderation-advertisements>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModerationadvertisementsContainerComponent implements OnInit {
  public user$: Observable<IUser | null>;
  public userRole$: Observable<UserRole | null>;
  public createAdvertisementLoadingStatus$: Observable<LoadingStatus>;
  public advertisementsRequest$: Observable<IAdvertisementRequestInterface | null>;
  public advertisementsLoadingStatus$: Observable<LoadingStatus | null>;

  constructor(private store: Store) {
    this.user$ = this.store.select(selectUserData);
    this.userRole$ = this.store.select(selectUserRole);
    this.advertisementsRequest$ = this.store.select(
      selectModerateAdvertisementsData
    );
    this.advertisementsLoadingStatus$ = this.store.select(
      selectModerateAdvertisementsLoadingStatus
    );
  }

  public onLogout(): void {
    this.store.dispatch(RegistrationPageActions.getUserLogout());
  }

  public ngOnInit(): void {
    this.store.dispatch(
      ModerateAdvertisementsListPageActions.getNonModerateAdvertisementsRequest()
    );
  }

  public onModerationDecision(
    moderationDecision: IAdvertisementModerationRequest
  ): void {
    console.log(moderationDecision);
    this.store.dispatch(
      ModerateAdvertisementsListPageActions.getDecisionNonModerateAdvertisementsRequest(
        {
          decision: moderationDecision,
        }
      )
    );
  }
}
