import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyBettingComponent } from './my-betting.component';
import { AdvertisementsListModule } from 'src/app/shared/components/advertisements-list/advertisements-list.module';

@NgModule({
  declarations: [MyBettingComponent],
  imports: [CommonModule, AdvertisementsListModule],
  exports: [MyBettingComponent],
})
export class MyBettingModule {}
