import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxSpinnerModule } from 'ngx-spinner';

import { CreateAdvertisementFillingPageComponent } from './create-advertisement-filling-page.component';
import { AdvertisementFillingPageModule } from '../advertisement-filling-page/advertisement-filling-page.module';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [CreateAdvertisementFillingPageComponent],
  imports: [
    CommonModule,
    HeaderModule,
    AdvertisementFillingPageModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    NgxDropzoneModule,
    MatSelectModule,
    MatTooltipModule,
    NgxSpinnerModule,
  ],
  exports: [CreateAdvertisementFillingPageComponent],
})
export class CreateAdvertisementFillingPageModule {}
