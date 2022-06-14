import { Component, Input } from '@angular/core';

import { IAdvertisementInterface } from '../../interfaces/advertisement.interface';
import { WeightEnum } from './enums/weight.enum';

@Component({
  selector: 'app-advertisement-price',
  templateUrl: './advertisement-price.component.html',
  styleUrls: ['./advertisement-price.component.scss'],
})
export class AdvertisementPriceComponent {
  @Input() public advertisement: IAdvertisementInterface;

  public get tonToKgUnit(): string {
    if (this.advertisement.unit === WeightEnum.ton) {
      return WeightEnum.kg;
    } else {
      return this.advertisement.unit;
    }
  }

  public get CalcTonToKg(): number {
    if (this.advertisement.unit === WeightEnum.ton) {
      return +this.advertisement.quantity / 1000;
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

  public get unitCostTextBet(): string {
    return `${this.advertisement.currency} ${this.unitCostBet}/${this.tonToKgUnit}`;
  }
}
