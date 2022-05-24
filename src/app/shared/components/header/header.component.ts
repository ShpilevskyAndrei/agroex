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

import { IUser } from '../../../pages/registration-page/interfaces/user-api-response.interface';
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
  @Input() public userRole: UserRole = UserRole.Guest;
  @Input() public user: IUser | null;

  @Output() public logout: EventEmitter<void> = new EventEmitter<void>();

  public userRoleConfig = LOGGED_ROLE_CONFIG;
  public userRoles = UserRole;
  public userPanelOption = USER_PANEL_OPTION;

  constructor(private router: Router) {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.user && this.user) {
      this.userRole = UserRole.User;
    }
  }

  public onLogin(): void {
    this.router.navigate(['registration']);
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
    this.logout.emit();
  }
}
