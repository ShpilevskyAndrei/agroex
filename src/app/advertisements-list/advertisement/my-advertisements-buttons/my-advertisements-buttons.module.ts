import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { MyAdvertisementsButtonsComponent } from './my-advertisements-buttons.component';

@NgModule({
  declarations: [MyAdvertisementsButtonsComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [MyAdvertisementsButtonsComponent],
})
export class MyAdvertisementsButtonsModule {}
