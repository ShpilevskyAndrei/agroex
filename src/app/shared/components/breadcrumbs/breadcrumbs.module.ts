import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BreadcrumbsComponent } from './breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [BreadcrumbsComponent],
  exports: [BreadcrumbsComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class BreadcrumbsModule {}
