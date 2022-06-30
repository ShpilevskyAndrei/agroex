import { Component, Input } from '@angular/core';

import { IAdvertisementInterface } from '../../interfaces/advertisement.interface';
import { WeightEnum } from './enums/weight.enum';
import { CurrenciesEnum } from '../bet-modal/enums/currencies.enum';
import { BetColorOptionEnum } from './enums/bet-color-option';
import { IUser } from '../../../../interfaces/user.interface';
import { ModerationStatus } from '../../../header/enums/moderation-status';

@Component({
  selector: 'app-advertisement-price',
  templateUrl: './advertisement-price.component.html',
  styleUrls: ['./advertisement-price.component.scss'],
})
export class AdvertisementPriceComponent {
  @Input() public advertisement: IAdvertisementInterface;
  @Input() public user: IUser | null;

  public moderationStatus = ModerationStatus;

  public get getBetColor(): string {
    return this.user?.id === this.advertisement.userBets?.[0]?.user_id
      ? BetColorOptionEnum.blueBetStyle
      : BetColorOptionEnum.orangeBetStyle;
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
    }
    return ' ';
  }

  public get tonToKgUnit(): string {
    return this.advertisement.unit === WeightEnum.ton
      ? WeightEnum.kg
      : this.advertisement.unit;
  }

  public get CalcTonToKg(): number {
    return this.advertisement.unit === WeightEnum.ton
      ? +this.advertisement.quantity * 1000
      : +this.advertisement.quantity;
  }

  public get unitCostBet(): number {
    return +(
      +this.advertisement.userBets[0].betValue / this.CalcTonToKg
    ).toFixed(2);
  }

  public get unitCostPrice(): number {
    return +(+this.advertisement.price / this.CalcTonToKg).toFixed(2);
  }

  public get unitCostTextBet(): string {
    return `${this.actualCurrency} ${this.unitCostBet}/${this.tonToKgUnit}`;
  }

  public get unitCostTextPrice(): string {
    return `${this.actualCurrency} ${this.unitCostPrice}/${this.tonToKgUnit}`;
  }

  public get minUnitCostText(): string {
    return `${this.actualCurrency} 0.01/${this.tonToKgUnit}`;
  }
}
