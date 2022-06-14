import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { MyAdvertisementsButtonsComponent } from './my-advertisements-buttons.component';

@NgModule({
  declarations: [MyAdvertisementsButtonsComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule],
  exports: [MyAdvertisementsButtonsComponent],
})
export class MyAdvertisementsButtonsModule {}
