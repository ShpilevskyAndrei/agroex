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

import { LoadingStatus } from '../../shared/interfaces/loading-status';
import { IUser } from '../../shared/interfaces/user.interface';
import { IS_SHOWN_MAP_CONFIG } from '../../shared/constants/is-shown-map-config';
import { IShownMap } from './interfaces/shown-map.interface';
import { UserPanelOptionId } from '../../shared/components/header/enums/user-panel-option-id';
import { UserRole } from '../../shared/components/header/enums/user-role';
import { IAdRequestInterface } from '../../shared/components/advertisements-list/interfaces/ad-request.interface';
import { CurrenciesEnum } from '../../shared/components/advertisements-list/advertisement/bet-modal/enums/currencies.enum';
import { BetValidators } from '../../shared/components/advertisements-list/advertisement/bet-modal/intefaces/bet-validator';
import { tap } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-advertisement-page',
  templateUrl: './advertisement-page.component.html',
  styleUrls: ['./advertisement-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvertisementPageComponent implements OnChanges {
  @Input() public user: IUser | null;
  @Input() public advertisement: IAdRequestInterface | null;
  @Input() public slug: string | null;
  @Input() public advertisementLoadingStatus: LoadingStatus | null;
  @Input() public userRole: UserRole | null;
  @Input() public map: GeoJSON.FeatureCollection<GeoJSON.MultiPolygon> | null;

  @Output() public logout: EventEmitter<void> = new EventEmitter<void>();
  @Output() public selectTab: EventEmitter<UserPanelOptionId> =
    new EventEmitter<UserPanelOptionId>();
  @Output() public setBet: EventEmitter<Record<string, string | number>> =
    new EventEmitter<Record<string, string | number>>();

  public hoverFilter = ['==', 'name', ''];

  public betForm: FormGroup = new FormGroup({
    bet: new FormControl('', {
      validators: [Validators.required, Validators.maxLength(9)],
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

  public getFullLocationName(): string | undefined {
    return `${this.advertisement?.advertisement.location}, ${this.advertisement?.advertisement.country}`;
  }

  public getLocation(): GeoJSON.FeatureCollection<GeoJSON.MultiPolygon> {
    if (this.map) {
      return {
        ...this.map,
        features: this.map?.features?.filter(
          (feature) =>
            feature?.properties?.COUNTRY === this.getFullLocationName()
        ),
      };
    }
    return { type: 'FeatureCollection', features: [] };
  }

  public getLocationCenter(): number[] {
    return this.getLocation().features?.[0]?.geometry
      ?.coordinates?.[0]?.[0]?.[0];
  }

  public activateHoverOn(evt: any): void {
    this.hoverFilter = ['==', 'name', evt.features[0].properties.name];
  }

  public disableHover(): void {
    this.hoverFilter = ['==', 'name', ''];
  }

  public onSetBet(newBetOptions: Record<string, string | number>): void {
    this.setBet.emit(newBetOptions);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.advertisement && changes.advertisement) {
      this.betForm
        .get('bet')
        ?.setValidators(
          BetValidators.checkBetValue(
            this.advertisement.advertisement.userBets.length
              ? this.advertisement.advertisement.userBets[0].betValue
              : '0',
            this.advertisement.advertisement.price
          )
        );
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

  public onLogout(): void {
    this.logout.emit();
  }

  public onSelectTab(selectedOptionId: UserPanelOptionId): void {
    this.selectTab.emit(selectedOptionId);
  }
}
