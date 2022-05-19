import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { CategoryComponent } from './category.component';

@NgModule({
  declarations: [CategoryComponent],
  exports: [CategoryComponent],
  imports: [CommonModule, MatIconModule],
})
export class CategoryModule {}
