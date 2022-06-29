import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

import { AdvertisementPageFillingComponent } from './advertisement-filling-page.component';
import { AdvertisementPriceModule } from '../../../shared/components/advertisements-list/advertisement/advertisement-price/advertisement-price.module';
import { AdvertisementButtonsAdPageModule } from './advertisement-buttons-ad-page/advertisement-buttons-ad-page.module';
import { AdvertisementTitleAdPageModule } from './advertisement-title-ad-page/advertisement-title-ad-page.module';

@NgModule({
  declarations: [AdvertisementPageFillingComponent],
  imports: [
    CommonModule,
    AdvertisementPriceModule,
    MatIconModule,
    NgxMapboxGLModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    AdvertisementButtonsAdPageModule,
    AdvertisementTitleAdPageModule,
  ],
  exports: [AdvertisementPageFillingComponent],
})
export class AdvertisementFillingPageModule {}
