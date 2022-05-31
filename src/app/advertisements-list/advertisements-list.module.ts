import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertisementsListComponent } from './advertisements-list.component';
import { AdvertisementModule } from './advertisement/advertisement.module';

@NgModule({
  declarations: [AdvertisementsListComponent],
  imports: [CommonModule, AdvertisementModule],
  exports: [AdvertisementsListComponent],
})
export class AdvertisementsListModule {}
