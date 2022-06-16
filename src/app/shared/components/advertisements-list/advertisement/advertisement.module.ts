import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AdvertisementComponent } from './advertisement.component';
import { AdvertisementTitleModule } from './advertisement-title/advertisement-title.module';
import { AdvertisementButtonsModule } from './advertisement-buttons/advertisement-buttons.module';
import { AdvertisementPriceModule } from './advertisement-price/advertisement-price.module';
import { BetModalComponent } from './bet-modal/bet-modal.component';

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
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  exports: [AdvertisementComponent],
})
export class AdvertisementModule {}
