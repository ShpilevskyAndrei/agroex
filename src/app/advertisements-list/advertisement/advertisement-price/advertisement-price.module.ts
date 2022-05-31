import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { AdvertisementPriceComponent } from './advertisement-price.component';

@NgModule({
  declarations: [AdvertisementPriceComponent],
  imports: [CommonModule, MatIconModule],
  exports: [AdvertisementPriceComponent],
})
export class AdvertisementPriceModule {}
