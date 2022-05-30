import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertisementComponent } from './advertisement.component';
import { AdvertisementTitleModule } from '../advertisement-title/advertisement-title.module';
import { AdvertisementButtonsModule } from '../advertisement-buttons/advertisement-buttons.module';
import { AdvertisementPriceModule } from '../advertisement-price/advertisement-price.module';

@NgModule({
  declarations: [AdvertisementComponent],
  imports: [
    CommonModule,
    AdvertisementTitleModule,
    AdvertisementButtonsModule,
    AdvertisementPriceModule,
  ],
  exports: [AdvertisementComponent],
})
export class AdvertisementModule {}
