import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { IAdRequestInterface } from '../../advertisements-list/interfaces/ad-request.interface';
import { LoadingStatus } from '../../shared/interfaces/loading-status';
import { IUser } from '../../shared/interfaces/user.interface';
import { IShownMapConfig } from './interfaces/shown-map-config.interface';
import { IShownMap } from './interfaces/shown-map.interface';
import { CurrenciesEnum } from '../../advertisements-list/advertisement/bet-modal/enums/currencies.enum';
import { UserPanelOptionId } from '../../shared/components/header/enums/user-panel-option-id';

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
  @Input() public setBet: EventEmitter<Record<string, string | number>> =
    new EventEmitter<Record<string, string | number>>();
  @Input() public betTimerDown: EventEmitter<string> =
    new EventEmitter<string>();

  @Output() public logout: EventEmitter<void> = new EventEmitter<void>();
  @Output() public selectTab: EventEmitter<UserPanelOptionId> =
    new EventEmitter<UserPanelOptionId>();

  public betForm: FormGroup = new FormGroup({
    bet: new FormControl('', {
      validators: [
        Validators.required,
        Validators.maxLength(9),
        Validators.min(this.minBetValue()), //!!!!!!!!!!!!!
        Validators.max(this.maxBetValue()), //!!!!!!!!!!!!!
        // BetValidators.checkBetValue(
        //   this.advertisement.advertisement.userBets.length
        //     ? this.advertisement.advertisement.userBets[0].betValue
        //     : '0',
        //   this.advertisement.advertisement.price
        // ),
      ],
      updateOn: 'change',
    }),
  });

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

  public newBet = '';

  public get isDisabled(): boolean {
    return !this.newBet;
  }

  public get actualCurrency(): string | undefined {
    if (this.advertisement?.advertisement.currency) {
      switch (this.advertisement.advertisement.currency) {
        case CurrenciesEnum.USD:
          return `$`;
        case CurrenciesEnum.EUR:
          return `€`;
        default:
          return this.advertisement.advertisement.currency;
      }
    } else {
      return ' ';
    }
  }
  //WHY???????????
  public maxBetValue(): number {
    if (this.advertisement?.advertisement.price) {
      return parseInt(this.advertisement.advertisement.price) - 1;
    } else {
      return 100;
    }
  }
  //WHY???????????
  public minBetValue(): number {
    if (this.advertisement?.advertisement) {
      return +this.advertisement.advertisement.userBets[0].betValue + 1;
    } else {
      return 1;
    }
  }

  public onSetBet(newBetOptions: Record<string, string | number>): void {
    this.setBet.emit(newBetOptions);
  }

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

  public onKeyUp(value: string): void {
    this.newBet = value;
  }

  public onSelectTab(selectedOptionId: UserPanelOptionId): void {
    this.selectTab.emit(selectedOptionId);
  }
}
