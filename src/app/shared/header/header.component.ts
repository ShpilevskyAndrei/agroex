import { Component, Input } from '@angular/core';

import { LOGGED_ROLE_CONFIG } from './constants/user-role-config';
import { UserRole } from './enums/user-role';
import { USER_PANEL_OPTION } from './constants/user-panel-option';

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

  public onLogin(): void {
    this.userRole = UserRole.User;
  }
  public onLogout(): void {
    this.userRole = UserRole.Guest;
  }
}
