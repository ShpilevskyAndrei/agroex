import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAdvertisementsComponent } from './my-advertisements.component';

@NgModule({
  declarations: [MyAdvertisementsComponent],
  imports: [CommonModule],
  exports: [MyAdvertisementsComponent],
})
export class MyAdvertisementsModule {}
