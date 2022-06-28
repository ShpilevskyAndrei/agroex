import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { CreatDateFormatPipe } from '../../../../pipes/creat-date-format.pipe';
import { AdvertisementTitleComponent } from './advertisement-title.component';
import { AdvertisementPriceModule } from '../advertisement-price/advertisement-price.module';

@NgModule({
  declarations: [AdvertisementTitleComponent, CreatDateFormatPipe],
  imports: [CommonModule, MatIconModule, AdvertisementPriceModule],
  exports: [AdvertisementTitleComponent, CreatDateFormatPipe],
})
export class AdvertisementTitleModule {}
