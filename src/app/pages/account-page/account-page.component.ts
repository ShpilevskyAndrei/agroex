import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { UserPanelOptionId } from '../../shared/components/header/enums/user-panel-option-id';
import { IUser } from '../../shared/interfaces/user.interface';
import { USER_PANEL_OPTION } from '../../shared/components/header/constants/user-panel-option';
import { IUserOptionsType } from '../../shared/components/header/interfaces/user-options-type.interface';
import { UserRole } from '../../shared/components/header/enums/user-role';

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

  @Output() public logout: EventEmitter<void> = new EventEmitter<void>();
  @Output() public selectTab: EventEmitter<UserPanelOptionId> =
    new EventEmitter<UserPanelOptionId>();

  public userPanelOption: IUserOptionsType[] = USER_PANEL_OPTION;

  public onLogout(): void {
    this.logout.emit();
  }

  public onSelectTab(selectedOptionId: UserPanelOptionId): void {
    this.selectTab.emit(selectedOptionId);
  }
}
