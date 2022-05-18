import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, MatSelectModule],
})
export class HeaderModule {}
