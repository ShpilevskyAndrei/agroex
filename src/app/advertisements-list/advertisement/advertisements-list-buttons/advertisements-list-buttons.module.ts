import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AdvertisementsListButtonsComponent } from './advertisements-list-buttons.component';

@NgModule({
  declarations: [AdvertisementsListButtonsComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [AdvertisementsListButtonsComponent],
})
export class AdvertisementsListButtonsModule {}
