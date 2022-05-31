import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AdvertisementButtonsComponent } from './advertisement-buttons.component';

@NgModule({
  declarations: [AdvertisementButtonsComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [AdvertisementButtonsComponent],
})
export class AdvertisementButtonsModule {}
