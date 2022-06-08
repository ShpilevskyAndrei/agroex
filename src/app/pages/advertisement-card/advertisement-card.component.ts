import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IUser } from '../../shared/interfaces/user.interface';
import { selectUserData } from '../../state/registration-page/registration-page.selectors';
import { IAdvertisementInterface } from '../../advertisements-list/interfaces/advertisement.interface';

@Component({
  selector: 'app-advertisement-card',
  templateUrl: './advertisement-card.component.html',
  styleUrls: ['./advertisement-card.component.scss'],
})
export class AdvertisementCardComponent {
  @Input() public user: IUser | null;
  @Output() public logout: EventEmitter<void> = new EventEmitter<void>();
  @Input() public advertisement: IAdvertisementInterface;

  public user$: Observable<IUser | null>;

  public isShownMap = {
    isShown: true,
    isShownText: 'Show map',
    isShownIcon: 'keyboard_arrow_down',
  };

  constructor(private store: Store) {
    this.user$ = this.store.select(selectUserData);
  }

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
