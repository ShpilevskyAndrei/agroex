import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

import { AdvertisementComponent } from './advertisement.component';
import { AdvertisementTitleModule } from './advertisement-title/advertisement-title.module';
import { AdvertisementButtonsModule } from './advertisement-buttons/advertisement-buttons.module';
import { AdvertisementPriceModule } from './advertisement-price/advertisement-price.module';
import { BetModalComponent } from './bet-modal/bet-modal.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AdvertisementComponent, BetModalComponent],
  imports: [
    CommonModule,
    AdvertisementTitleModule,
    AdvertisementButtonsModule,
    AdvertisementPriceModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    RouterModule,
  ],
  exports: [AdvertisementComponent],
})
export class AdvertisementModule {}
