import { Component, Input } from '@angular/core';

import { IAdvertisementInterface } from '../../interfaces/advertisement.interface';
import { WeightEnum } from './enums/weight.enum';
import { CurrenciesEnum } from '../bet-modal/enums/currencies.enum';

@Component({
  selector: 'app-advertisement-price',
  templateUrl: './advertisement-price.component.html',
  styleUrls: ['./advertisement-price.component.scss'],
})
export class AdvertisementPriceComponent {
  @Input() public advertisement: IAdvertisementInterface;

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
    if (this.advertisement.unit === WeightEnum.ton) {
      return WeightEnum.kg;
    } else {
      return this.advertisement.unit;
    }
  }

  public get CalcTonToKg(): number {
    if (this.advertisement.unit === WeightEnum.ton) {
      return +this.advertisement.quantity * 1000;
    } else {
      return +this.advertisement.quantity;
    }
  }

  public get unitCostBet(): number {
    return (
      Math.floor(
        (+this.advertisement.userBets[0].betValue / this.CalcTonToKg) * 100
      ) / 100
    );
  }

  public get unitCostPrice(): number {
    return (
      Math.floor((+this.advertisement.price / this.CalcTonToKg) * 100) / 100
    );
  }

  public get unitCostTextBet(): string {
    return `${this.actualCurrency} ${this.unitCostBet}/${this.tonToKgUnit}`;
  }

  public get unitCostTextPrice(): string {
    return `${this.actualCurrency} ${this.unitCostPrice}/${this.tonToKgUnit}`;
  }
}
