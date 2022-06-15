import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { ModerationAdvertisementsListComponent } from './moderation-advertisements-list.component';
import { ModerationAdvertisementModule } from './advertisement/moderation-advertisement.module';
import { ModerationAdvertisementsListService } from '../pages/moderation-advertisements/moderation-advertisements-list.service';
import { PolicyModalContentComponentModule } from './advertisement/policy-modal-content/policy-modal-content.module';

@NgModule({
  declarations: [ModerationAdvertisementsListComponent],
  imports: [
    CommonModule,
    ModerationAdvertisementModule,
    MatDialogModule,
    PolicyModalContentComponentModule,
  ],
  exports: [ModerationAdvertisementsListComponent],
  providers: [ModerationAdvertisementsListService],
})
export class ModerationAdvertisementsListModule {}
