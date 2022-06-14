import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { Router } from '@angular/router';

import { IUser } from '../../interfaces/user.interface';
import { USER_PANEL_OPTION } from './constants/user-panel-option';
import { LOGGED_ROLE_CONFIG } from './constants/user-role-config';
import { UserPanelOptionId } from './enums/user-panel-option-id';
import { UserRole } from './enums/user-role';
import { IUserOptionsType } from './interfaces/user-options-type.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnChanges {
  @Input() public user: IUser | null;
  @Input() public userRole: UserRole | null;

  @Output() public logout: EventEmitter<void> = new EventEmitter<void>();
  @Output() public selectTab: EventEmitter<UserPanelOptionId> =
    new EventEmitter<UserPanelOptionId>();

  public userRoleConfig = LOGGED_ROLE_CONFIG;
  public userRoles = UserRole;
  public userPanelOption = USER_PANEL_OPTION;
  public userCurrentRole: UserRole | null = UserRole.Guest;

  constructor(private router: Router) {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.user && this.user) {
      this.userCurrentRole = this.userRole;
    }
  }

  public onLogin(): void {
    this.router.navigate(['registration']);
  }

  public navigateToUserOption(
    selectedOption: IUserOptionsType,
    userNavigationPanel: MatSelect
  ): void {
    if (selectedOption.id === UserPanelOptionId.MyAccount) {
      userNavigationPanel.value = null;
      this.onLogout();

      return;
    }
  }

  public goToMainPage(): void {
    this.router.navigate(['']);
  }

  public goToCreateAdvertisement(): void {
    this.router.navigate(['create-advertisement']);
  }

  public goToModerateAdvertisement(): void {
    this.router.navigate(['moderation-advertisements']);
  }

  public onLogout(): void {
    this.userCurrentRole = UserRole.Guest;
    this.logout.emit();
    this.router.navigate(['']);
  }

  public onSelectPage(selectedOptionId: IUserOptionsType): void {
    this.selectTab.emit(selectedOptionId.id);
  }
}
