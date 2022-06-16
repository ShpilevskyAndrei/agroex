import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AdvertisementButtonsAdPageComponent } from './advertisement-buttons-ad-page.component';

@NgModule({
  declarations: [AdvertisementButtonsAdPageComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatFormFieldModule],
  exports: [AdvertisementButtonsAdPageComponent],
})
export class AdvertisementButtonsAdPageModule {}
