import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IUser } from '../registration-page/interfaces/user-api-response.interface';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss'],
})
export class AccountPageComponent {
  @Input() public user: IUser | null;

  @Output() public logout: EventEmitter<void> = new EventEmitter<void>();

  public onLogout(): void {
    this.logout.emit();
  }
}
