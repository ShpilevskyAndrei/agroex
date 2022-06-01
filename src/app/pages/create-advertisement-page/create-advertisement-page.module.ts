import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { HeaderModule } from '../../shared/components/header/header.module';
import { CreateAdvertisementPageContainerComponent } from './create-advertisement-page-container.component';
import { CreateAdvertisementPageRoutingModule } from './create-advertisement-page-routing.module';
import { CreateAdvertisementPageComponent } from './create-advertisement-page.component';

@NgModule({
  declarations: [
    CreateAdvertisementPageComponent,
    CreateAdvertisementPageContainerComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    CreateAdvertisementPageRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgxDropzoneModule,
    MatSelectModule,
  ],
  exports: [CreateAdvertisementPageContainerComponent],
})
export class CreateAdvertisementPageModule {}
