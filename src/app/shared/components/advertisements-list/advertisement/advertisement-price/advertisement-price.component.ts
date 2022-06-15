import { Component, Input } from '@angular/core';

import { IAdvertisementInterface } from '../../interfaces/advertisement.interface';
import { WeightEnum } from './enums/weight.enum';
import { CurrenciesEnum } from '../bet-modal/enums/currencies.enum';
import { BetColorOptionEnum } from './enums/bet-color-option';
import { IUser } from '../../../../interfaces/user.interface';

@Component({
  selector: 'app-advertisement-price',
  templateUrl: './advertisement-price.component.html',
  styleUrls: ['./advertisement-price.component.scss'],
})
export class AdvertisementPriceComponent {
  @Input() public advertisement: IAdvertisementInterface;
  @Input() public user: IUser | null;

  public betColor: BetColorOptionEnum;

  public get getBetColor(): string {
    return this.user?.id === this.advertisement.userBets[0].user_id
      ? (this.betColor = BetColorOptionEnum.blueBetStyle)
      : (this.betColor = BetColorOptionEnum.orangeBetStyle);
  }

  public get actualCurrency(): string | undefined {
    if (this.advertisement.currency) {
      switch (this.advertisement.currency) {
        case CurrenciesEnum.USD:
          return `$`;
        case CurrenciesEnum.EUR:
          return `€`;
        default:
          return this.advertisement.currency;
      }
    } else {
      return ' ';
    }
  }

  public get tonToKgUnit(): string {
    return this.advertisement.unit === WeightEnum.ton
      ? WeightEnum.kg
      : this.advertisement.unit;
  }

  public get CalcTonToKg(): number {
    return this.advertisement.unit === WeightEnum.ton
      ? +this.advertisement.quantity * 1e3
      : +this.advertisement.quantity;
  }

  public get unitCostBet(): number {
    return (
      Math.round(
        (+this.advertisement.userBets[0].betValue / this.CalcTonToKg) * 100
      ) / 100
    );
  }

  public get unitCostPrice(): number {
    return (
      Math.round((+this.advertisement.price / this.CalcTonToKg) * 100) / 100
    );
  }

  public get unitCostTextBet(): string {
    return `${this.actualCurrency} ${this.unitCostBet}/${this.tonToKgUnit}`;
  }

  public get unitCostTextPrice(): string {
    return `${this.actualCurrency} ${this.unitCostPrice}/${this.tonToKgUnit}`;
  }
}
