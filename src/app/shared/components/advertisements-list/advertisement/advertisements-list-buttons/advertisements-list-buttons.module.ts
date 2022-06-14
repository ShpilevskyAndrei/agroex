import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AdvertisementsListButtonsComponent } from './advertisements-list-buttons.component';

@NgModule({
  declarations: [AdvertisementsListButtonsComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule],
  exports: [AdvertisementsListButtonsComponent],
})
export class AdvertisementsListButtonsModule {}
