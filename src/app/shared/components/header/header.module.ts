import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from "@angular/material/menu";

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatMenuModule,
  ],
})
export class HeaderModule {}
