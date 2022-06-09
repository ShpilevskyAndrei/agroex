import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IAdRequestInterface } from '../../advertisements-list/interfaces/ad-request.interface';
import { IUser } from '../../shared/interfaces/user.interface';

@Component({
  selector: 'app-advertisement-page',
  templateUrl: './advertisement-page.component.html',
  styleUrls: ['./advertisement-page.component.scss'],
})
export class AdvertisementPageComponent {
  @Input() public user: IUser | null;
  @Input() public advertisement: IAdRequestInterface | null;
  @Input() public slug: string | null;
  @Output() public logout: EventEmitter<void> = new EventEmitter<void>();

  public isShownMap = {
    isShown: true,
    isShownText: 'Show map',
    isShownIcon: 'keyboard_arrow_down',
  };

  public onLogout(): void {
    this.logout.emit();
  }

  public toggleShow(): void {
    this.isShownMap.isShown = !this.isShownMap.isShown;
    this.isShownMap.isShownText =
      this.isShownMap.isShownText === 'Show map' ? 'Hide map' : 'Show map';
    this.isShownMap.isShownIcon =
      this.isShownMap.isShownIcon === 'keyboard_arrow_down'
        ? 'keyboard_arrow_up'
        : 'keyboard_arrow_down';
  }
}
