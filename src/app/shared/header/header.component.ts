import { Component, Input } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { Router } from '@angular/router';

import { LOGGED_ROLE_CONFIG } from './constants/user-role-config';
import { USER_PANEL_OPTION } from './constants/user-panel-option';
import { UserRole } from './enums/user-role';
import { IUserOptionsType } from './interfaces/user-options-type.interface';
import { UserPanelOptionId } from './enums/user-panel-option-id';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() public userRole: UserRole = UserRole.Guest;

  public userRoleConfig = LOGGED_ROLE_CONFIG;
  public userRoles = UserRole;
  public userPanelOption = USER_PANEL_OPTION;

  constructor(private router: Router) {}

  public onLogin(): void {
    this.userRole = UserRole.User;
  }

  public navigateToUserOption(
    selectedOption: IUserOptionsType,
    userNavigationPanel: MatSelect
  ): void {
    if (selectedOption.id === UserPanelOptionId.LogOut) {
      userNavigationPanel.value = null;
      this.onLogout();

      return;
    }
    console.log(selectedOption.url);
  }

  public goToMainPage(): void {
    this.router.navigate(['']);
  }

  private onLogout(): void {
    this.userRole = UserRole.Guest;
  }
}
