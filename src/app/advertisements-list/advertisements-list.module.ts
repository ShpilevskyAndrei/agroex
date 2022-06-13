import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertisementsListComponent } from './advertisements-list.component';
import { AdvertisementModule } from './advertisement/advertisement.module';
import { AdvertisementsListService } from './advertisements-list.service';
import { AdvertisementsListButtonsModule } from '../pages/main-dashboard/advertisements-list-buttons/advertisements-list-buttons.module';
import { MyAdvertisementsButtonsModule } from './advertisement/my-advertisements-buttons/my-advertisements-buttons.module';

@NgModule({
  declarations: [AdvertisementsListComponent],
  imports: [
    CommonModule,
    AdvertisementModule,
    AdvertisementsListButtonsModule,
    MyAdvertisementsButtonsModule,
  ],
  exports: [AdvertisementsListComponent],
  providers: [AdvertisementsListService],
})
export class AdvertisementsListModule {}
