import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IAdRequestInterface } from '../../advertisements-list/interfaces/ad-request.interface';
import { LoadingStatus } from '../../shared/interfaces/loading-status';
import { IUser } from '../../shared/interfaces/user.interface';
import { IShownMapConfig } from './interfaces/shown-map-config.interface';
import { IShownMap } from './interfaces/shown-map.interface';

@Component({
  selector: 'app-advertisement-page',
  templateUrl: './advertisement-page.component.html',
  styleUrls: ['./advertisement-page.component.scss'],
})
export class AdvertisementPageComponent {
  @Input() public user: IUser | null;
  @Input() public advertisement: IAdRequestInterface | null;
  @Input() public slug: string | null;
  @Input() public advertisementLoadingStatus: LoadingStatus | null;
  @Output() public logout: EventEmitter<void> = new EventEmitter<void>();

  public isShownMapConfig: IShownMapConfig = {
    isShown: true,
    showMapText: 'Show map',
    hideMapText: 'Hide map',
    iconUp: 'keyboard_arrow_up',
    iconDown: 'keyboard_arrow_down',
  };

  public isShownMap: IShownMap = {
    isShown: this.isShownMapConfig.isShown,
    isShownText: this.isShownMapConfig.showMapText,
    isShownIcon: this.isShownMapConfig.iconDown,
  };

  public toggleShow(): void {
    this.isShownMap.isShownText = this.isShownMap.isShown
      ? this.isShownMapConfig.hideMapText
      : this.isShownMapConfig.showMapText;
    this.isShownMap.isShownIcon = this.isShownMap.isShown
      ? this.isShownMapConfig.iconUp
      : this.isShownMapConfig.iconDown;
    this.isShownMap.isShown = !this.isShownMap.isShown;
  }

  public onLogout(): void {
    this.logout.emit();
  }
}
