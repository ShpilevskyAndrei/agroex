import { Component, Input } from '@angular/core';

import { UserRole } from './user-role/user-role';
import { UserRoleConfiguration } from './user-role/user-role-configuration';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() public userRole: UserRole = UserRole.Admin;
  public userRoleConfiguration = UserRoleConfiguration;
}
