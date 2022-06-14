import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

import { ModerationAdvertisementComponent } from './moderation-advertisement.component';
import { ModerationAdvertisementButtonsModule } from './advertisement-buttons/moderation-advertisement-buttons.module';
import { AdvertisementPriceModule } from '../../advertisements-list/advertisement/advertisement-price/advertisement-price.module';
import { AdvertisementTitleModule } from '../../advertisements-list/advertisement/advertisement-title/advertisement-title.module';

@NgModule({
  declarations: [ModerationAdvertisementComponent],
  imports: [
    CommonModule,
    AdvertisementTitleModule,
    ModerationAdvertisementButtonsModule,
    AdvertisementPriceModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
  ],
  exports: [ModerationAdvertisementComponent],
})
export class ModerationAdvertisementModule {}
