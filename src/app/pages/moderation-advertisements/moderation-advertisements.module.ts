import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { HeaderModule } from '../../shared/components/header/header.module';
import { ModerationadvertisementsContainerComponent } from './moderation-advertisements-container.component';
import { ModerationadvertisementsPageRoutingModule } from './moderation-advertisements-routing.module';
import { ModerationadvertisementsComponent } from './moderation-advertisements.component';
import { AdvertisementsListModule } from '../../shared/components/advertisements-list/advertisements-list.module';
import { ModerationAdvertisementButtonsModule } from './advertisement-buttons/moderation-advertisement-buttons.module';
import { PolicyModalContentComponentModule } from './policy-modal-content/policy-modal-content.module';

@NgModule({
  declarations: [
    ModerationadvertisementsComponent,
    ModerationadvertisementsContainerComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    ModerationadvertisementsPageRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    AdvertisementsListModule,
    ModerationAdvertisementButtonsModule,
    PolicyModalContentComponentModule,
  ],
  exports: [ModerationadvertisementsContainerComponent],
})
export class ModerationAdvertisementsPageModule {}
