import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxSpinnerModule } from 'ngx-spinner';

import { HeaderModule } from '../../shared/components/header/header.module';
import { ModerationadvertisementsContainerComponent } from './moderation-advertisements-container.component';
import { ModerationAdvertisementsRoutingModule } from './moderation-advertisements-routing.module';
import { ModerationAdvertisementsComponent } from './moderation-advertisements.component';
import { AdvertisementsListModule } from '../../shared/components/advertisements-list/advertisements-list.module';
import { ModerationMessageModalComponentModule } from './moderation-message-modal/moderation-message-modal.module';
import { ModerationAdvertisementsButtonsModule } from './moderation-advertisements-buttons/moderation-advertisements-buttons.module';

@NgModule({
  declarations: [
    ModerationAdvertisementsComponent,
    ModerationadvertisementsContainerComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    ModerationAdvertisementsRoutingModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    MatFormFieldModule,
    MatButtonModule,
    AdvertisementsListModule,
    ModerationAdvertisementsButtonsModule,
    ModerationMessageModalComponentModule,
  ],
  exports: [ModerationadvertisementsContainerComponent],
})
export class ModerationAdvertisementsPageModule {}
