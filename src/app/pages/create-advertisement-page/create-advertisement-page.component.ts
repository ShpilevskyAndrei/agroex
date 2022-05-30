import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IUser } from '../registration-page/interfaces/user-api-response.interface';

@Component({
  selector: 'app-create-advertisement-page',
  templateUrl: './create-advertisement-page.component.html',
  styleUrls: ['./create-advertisement-page.component.scss'],
})
export class CreateAdvertisementPageComponent {
  @Input() public user: IUser | null;

  @Output() public logout: EventEmitter<void> = new EventEmitter<void>();

  public onLogout(): void {
    this.logout.emit();
  }
}
