import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { tap } from 'rxjs';
import { LngLatLike } from 'mapbox-gl';

import { IUser } from '../../interfaces/user.interface';
import { IS_SHOWN_MAP_CONFIG } from '../../constants/is-shown-map-config';
import { IShownMap } from './interfaces/shown-map.interface';
import { IAdRequestInterface } from '../advertisements-list/interfaces/ad-request.interface';
import { CurrenciesEnum } from '../advertisements-list/advertisement/bet-modal/enums/currencies.enum';
import { BetValidators } from '../advertisements-list/advertisement/bet-modal/intefaces/bet-validator';
import { TASHKENT_COORDINATES } from '../../constants/tashkent-coordinates';
import { REGEXP_FOR_IS_INTEGER_NUMBER } from '../../constants/regexp';
import { WeightEnum } from '../advertisements-list/advertisement/advertisement-price/enums/weight.enum';

@UntilDestroy()
@Component({
  selector: 'app-advertisement-filling-page',
  templateUrl: './advertisement-filling-page.component.html',
  styleUrls: ['./advertisement-filling-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvertisementPageFillingComponent implements OnChanges {
  @Input() public user: IUser | null;
  @Input() public advertisement: IAdRequestInterface | null;
  @Input() public map: GeoJSON.FeatureCollection<GeoJSON.MultiPolygon> | null;

  @Output() public setBet: EventEmitter<Record<string, string | number>> =
    new EventEmitter<Record<string, string | number>>();
  @Output() public setBuy: EventEmitter<Record<string, string>> =
    new EventEmitter<Record<string, string>>();

  public betForm: FormGroup = new FormGroup({
    bet: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'change',
    }),
  });

  public isShownMapConfig = IS_SHOWN_MAP_CONFIG;

  public isShownMap: IShownMap = {
    isShown: this.isShownMapConfig.isShown,
    isShownText: this.isShownMapConfig.showMapText,
    isShownIcon: this.isShownMapConfig.iconDown,
  };

  public newBet = '';

  public get tonToKgUnit(): string {
    if (!this.advertisement) {
      return '';
    }
    return this.advertisement?.advertisement.unit === WeightEnum.ton
      ? WeightEnum.kg
      : this.advertisement?.advertisement.unit;
  }

  public get calcTonToKg(): number {
    if (!this.advertisement?.advertisement.quantity) {
      return 0;
    }
    return this.advertisement?.advertisement.unit === WeightEnum.ton
      ? +this.advertisement?.advertisement.quantity * 1000
      : +this.advertisement.advertisement.quantity;
  }

  public get unitCostBet(): number {
    if (!this.newBet) {
      return 0;
    }
    return +(+this.newBet / this.calcTonToKg) >= 0.01
      ? +(+this.newBet / this.calcTonToKg).toFixed(2)
      : 0.01;
  }

  public get unitCostBetText(): string {
    if (!this.newBet) {
      return '0';
    }
    return this.unitCostBet <= 0.01
      ? `Less than ${this.actualCurrency} ${this.unitCostBet}/${this.tonToKgUnit}`
      : `${this.actualCurrency} ${this.unitCostBet}/${this.tonToKgUnit}`;
  }

  public get isDisabled(): boolean {
    return !this.newBet;
  }

  public get actualCurrency(): string {
    if (!this.advertisement?.advertisement.currency) {
      return ' ';
    }
    switch (this.advertisement.advertisement.currency) {
      case CurrenciesEnum.USD:
        return '$';
      case CurrenciesEnum.EUR:
        return '€';
      default:
        return this.advertisement.advertisement.currency;
    }
  }

  public getFullLocationName(): string | undefined {
    return `${this.advertisement?.advertisement.location}, ${this.advertisement?.advertisement.country}`;
  }

  public getLocation(): GeoJSON.FeatureCollection<GeoJSON.MultiPolygon> {
    if (this.map) {
      return {
        ...this.map,
        features: this.map?.features?.filter(
          (
            feature: GeoJSON.Feature<
              GeoJSON.MultiPolygon,
              GeoJSON.GeoJsonProperties
            >
          ) => feature?.properties?.COUNTRY === this.getFullLocationName()
        ),
      };
    }
    return { type: 'FeatureCollection', features: [] };
  }

  public getLocationCenter(): LngLatLike {
    return [
      this.getLocation().features?.[0]?.geometry
        ?.coordinates?.[0]?.[0]?.[0]?.[0] || TASHKENT_COORDINATES[0],
      this.getLocation().features?.[0]?.geometry
        ?.coordinates?.[0]?.[0]?.[0]?.[1] || TASHKENT_COORDINATES[1],
    ];
  }

  public onSetBet(newBetOptions: Record<string, string | number>): void {
    this.setBet.emit(newBetOptions);
  }

  public onSetBuy(buyOptions: Record<string, string>): void {
    this.setBuy.emit(buyOptions);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.advertisement && changes.advertisement) {
      this.betForm
        .get('bet')
        ?.setValidators([
          Validators.pattern(REGEXP_FOR_IS_INTEGER_NUMBER),
          BetValidators.checkBetValue(
            this.advertisement.advertisement.userBets.length
              ? this.advertisement.advertisement.userBets[0].betValue
              : '0',
            this.advertisement.advertisement.price
          ),
        ]);
      this.newBet = '';
    }
    this.betForm
      .get('bet')
      ?.valueChanges.pipe(
        tap((value: string) => {
          this.newBet = value;
        }),
        untilDestroyed(this)
      )
      .subscribe();
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
}
