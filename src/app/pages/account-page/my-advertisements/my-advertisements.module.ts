import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

import { MyAdvertisementsComponent } from './my-advertisements.component';
import { AdvertisementsListModule } from '../../../shared/components/advertisements-list/advertisements-list.module';
import { MyAdvertisementsButtonsModule } from './my-advertisements-buttons/my-advertisements-buttons.module';

@NgModule({
  declarations: [MyAdvertisementsComponent],
  imports: [
    CommonModule,
    AdvertisementsListModule,
    MyAdvertisementsButtonsModule,
    MatTabsModule,
  ],
  exports: [MyAdvertisementsComponent],
})
export class MyAdvertisementsModule {}
