import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserPanelOptionId } from '../../shared/components/header/enums/user-panel-option-id';

import { LoadingStatus } from '../../shared/interfaces/loading-status';
import { IUser } from '../../shared/interfaces/user.interface';
import { AppRootActions } from '../../state/app-root/app-root.actions';
import { CreateAdvertisementPageActions } from '../../state/create-advertisement-page/create-advertisement-page.actions';
import { selectCreateAdvertisementLoadingStatus } from '../../state/create-advertisement-page/create-advertisement-page.selectors';
import { RegistrationPageActions } from '../../state/registration-page/registration-page.actions';
import { selectUserData } from '../../state/registration-page/registration-page.selectors';

@Component({
  selector: 'app-create-advertisement-page-container',
  template: ` <app-create-advertisement-page
    [user]="user$ | async"
    [createAdvertisementLoadingStatus]="
      createAdvertisementLoadingStatus$ | async
    "
    (logout)="onLogout()"
    (formAdvertisement)="onSubmitAdvertisementFormData($event)"
    (dropLoadingStatus)="onDropLoadingStatus()"
    (selectTab)="onSelectTab($event)"
  ></app-create-advertisement-page>`,
})
export class CreateAdvertisementPageContainerComponent {
  public user$: Observable<IUser | null>;
  public createAdvertisementLoadingStatus$: Observable<LoadingStatus>;

  constructor(private store: Store) {
    this.user$ = this.store.select(selectUserData);
    this.createAdvertisementLoadingStatus$ = this.store.select(
      selectCreateAdvertisementLoadingStatus
    );
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

  public onSelectTab(selectedOptionId: UserPanelOptionId): void {
    this.store.dispatch(AppRootActions.getUserSelectTab({ selectedOptionId }));
  }
}
