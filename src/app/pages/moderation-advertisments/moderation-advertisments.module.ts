import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { HeaderModule } from '../../shared/components/header/header.module';
import { ModerationAdvertismentsContainerComponent } from './moderation-advertisments-container.component';
import { ModerationAdvertismentsPageRoutingModule } from './moderation-advertisments-routing.module';
import { ModerationAdvertismentsComponent } from './moderation-advertisments.component';

@NgModule({
  declarations: [
    ModerationAdvertismentsComponent,
    ModerationAdvertismentsContainerComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    ModerationAdvertismentsPageRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgxDropzoneModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  exports: [ModerationAdvertismentsContainerComponent],
})
export class ModerationAdvertismentsPageModule {}
