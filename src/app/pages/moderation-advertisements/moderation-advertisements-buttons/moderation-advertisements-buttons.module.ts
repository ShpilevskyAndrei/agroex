import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ModerationAdvertisementsButtonsComponent } from './moderation-advertisements-buttons.component';

@NgModule({
  declarations: [ModerationAdvertisementsButtonsComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [ModerationAdvertisementsButtonsComponent],
})
export class ModerationAdvertisementsButtonsModule {}
