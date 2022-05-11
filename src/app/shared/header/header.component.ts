import { Component, Input } from '@angular/core';

import { UserRole } from './enums/user-role';
import { USER_ROLE_CONFIG } from './constants/user-role-config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() public userRole: UserRole = UserRole.Guest;

  public userRoleConfig = USER_ROLE_CONFIG;
}
