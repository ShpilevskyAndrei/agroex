import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertisementsComponent } from './advertisements.component';
import { AdvertisementModule } from '../advertisement/advertisement.module';

@NgModule({
  declarations: [AdvertisementsComponent],
  imports: [CommonModule, AdvertisementModule],
  exports: [AdvertisementsComponent],
})
export class AdvertisementsModule {}
