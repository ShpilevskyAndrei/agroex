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

import { HeaderModule } from '../../shared/components/header/header.module';
import { CreateAdvertisementPageContainerComponent } from './create-advertisement-page-container.component';
import { CreateAdvertisementPageRoutingModule } from './create-advertisement-page-routing.module';
import { CreateAdvertisementPageComponent } from './create-advertisement-page.component';
import { AdvertisementFillingPageModule } from '../../shared/components/advertisement-filling-page/advertisement-filling-page.module';

@NgModule({
  declarations: [
    CreateAdvertisementPageComponent,
    CreateAdvertisementPageContainerComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    AdvertisementFillingPageModule,
    CreateAdvertisementPageRoutingModule,
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
  exports: [CreateAdvertisementPageContainerComponent],
})
export class CreateAdvertisementPageModule {}
