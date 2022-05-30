import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertisementButtonsComponent } from './advertisement-buttons.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AdvertisementButtonsComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [AdvertisementButtonsComponent],
})
export class AdvertisementButtonsModule {}
