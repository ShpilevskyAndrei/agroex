import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AdvertisementButtonsComponent } from './advertisement-buttons.component';
import { AdvertisementsListButtonsModule } from '../advertisements-list-buttons/advertisements-list-buttons.module';

@NgModule({
  declarations: [AdvertisementButtonsComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    AdvertisementsListButtonsModule,
  ],
  exports: [AdvertisementButtonsComponent],
})
export class AdvertisementButtonsModule {}
