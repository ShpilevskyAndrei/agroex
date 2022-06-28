import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr, 'fr');

import { AdvertisementPriceComponent } from './advertisement-price.component';
import { AvailableDateFormatPipe } from '../../../../pipes/available-date-format.pipe';

@NgModule({
  declarations: [AdvertisementPriceComponent, AvailableDateFormatPipe],
  imports: [CommonModule],
  exports: [AdvertisementPriceComponent, AvailableDateFormatPipe],
})
export class AdvertisementPriceModule {}
