import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ModerationAdvertisementButtonsComponent } from './moderation-advertisement-buttons.component';

@NgModule({
  declarations: [ModerationAdvertisementButtonsComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [ModerationAdvertisementButtonsComponent],
})
export class ModerationAdvertisementButtonsModule {}
