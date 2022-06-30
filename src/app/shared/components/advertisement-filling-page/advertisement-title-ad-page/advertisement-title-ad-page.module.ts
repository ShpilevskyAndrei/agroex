import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertisementTitleAdPageComponent } from './advertisement-title-ad-page.component';
import { AdvertisementPriceModule } from '../../advertisements-list/advertisement/advertisement-price/advertisement-price.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AdvertisementTitleAdPageComponent],
  imports: [
    CommonModule,
    MatIconModule,
    AdvertisementPriceModule,
    AdvertisementPriceModule,
  ],
  exports: [AdvertisementTitleAdPageComponent],
})
export class AdvertisementTitleAdPageModule {}
