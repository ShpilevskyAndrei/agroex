import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertisementsListComponent } from './advertisements-list.component';
import { AdvertisementModule } from './advertisement/advertisement.module';
import { AdvertisementsListService } from './advertisements-list.service';

@NgModule({
  declarations: [AdvertisementsListComponent],
  imports: [CommonModule, AdvertisementModule],
  exports: [AdvertisementsListComponent],
  providers: [AdvertisementsListService],
})
export class AdvertisementsListModule {}
