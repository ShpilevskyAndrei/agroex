import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';

import { MyBettingComponent } from './my-betting.component';
import { AdvertisementsListModule } from 'src/app/shared/components/advertisements-list/advertisements-list.module';
import { AdvertisementsListButtonsModule } from 'src/app/shared/components/advertisements-list/advertisement/advertisements-list-buttons/advertisements-list-buttons.module';

@NgModule({
  declarations: [MyBettingComponent],
  imports: [
    CommonModule,
    AdvertisementsListModule,
    AdvertisementsListButtonsModule,
    NgxSpinnerModule,
  ],
  exports: [MyBettingComponent],
})
export class MyBettingModule {}
