import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { AdvertisementPriceComponent } from './advertisement-price.component';
import { AvailableDateFormatPipe } from '../../../shared/pipes/available-date-format.pipe';

@NgModule({
  declarations: [AdvertisementPriceComponent, AvailableDateFormatPipe],
  imports: [CommonModule, MatIconModule],
  exports: [AdvertisementPriceComponent],
})
export class AdvertisementPriceModule {}
