import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import { UserPanelOptionId } from '../../shared/components/header/enums/user-panel-option-id';
import { IUser } from '../../shared/interfaces/user.interface';
import { USER_PANEL_OPTION } from '../../shared/components/header/constants/user-panel-option';
import { IUserOptionsType } from '../../shared/components/header/interfaces/user-options-type.interface';
import { UserRole } from '../../shared/components/header/enums/user-role';
import { IAdvertisementRequestInterface } from '../../shared/components/advertisements-list/interfaces/advertisement-request.interface';
import { LoadingStatus } from '../../shared/interfaces/loading-status';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountPageComponent {
  @Input() public user: IUser | null;
  @Input() public userRole: UserRole | null;
  @Input() public selectedTab: string | null;
  @Input()
  public myAdvertisementsRequest: IAdvertisementRequestInterface | null;
  @Input() public myAdvertisementsLoadingStatus: LoadingStatus | null;

  @Output() public logout: EventEmitter<void> = new EventEmitter<void>();
  @Output() public selectTab: EventEmitter<UserPanelOptionId> =
    new EventEmitter<UserPanelOptionId>();
  @Output() public dispatcher: EventEmitter<Function> =
    new EventEmitter<Function>();
  @Output() public confirmDeal: EventEmitter<string> =
    new EventEmitter<string>();

  public userPanelOption: IUserOptionsType[] = USER_PANEL_OPTION;
  public userPanelOptionId = UserPanelOptionId;

  constructor(private spinner: NgxSpinnerService) {}

  public get combineLoadingStatus(): LoadingStatus {
    const loadingStatusArr: (LoadingStatus | null)[] = [
      this.myAdvertisementsLoadingStatus,
    ];
    if (
      loadingStatusArr.every(
        (loadingStatus: LoadingStatus | null) => loadingStatus?.loaded
      )
    ) {
      return { loaded: true, loading: false, error: null };
    }

    if (
      loadingStatusArr.some(
        (loadingStatus: LoadingStatus | null) => loadingStatus?.loading
      )
    ) {
      this.spinner.show();
      return { loaded: false, loading: true, error: null };
    }

    return {
      loaded: false,
      loading: false,
      error:
        loadingStatusArr.find(
          (loadingStatus: LoadingStatus | null) => loadingStatus?.error
        )?.error || null,
    };
  }

  public onLogout(): void {
    this.logout.emit();
  }

  public onSelectTab(selectedOptionId: UserPanelOptionId): void {
    this.selectTab.emit(selectedOptionId);
  }

  public onDispatcher(dispatcher: Function): void {
    this.dispatcher.emit(dispatcher);
  }

  public onConfirmDeal(slug: string): void {
    this.confirmDeal.emit(slug);
  }
}
