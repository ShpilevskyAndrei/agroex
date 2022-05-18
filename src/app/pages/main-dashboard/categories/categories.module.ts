import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryModule } from './category/category.module';
import { CategoriesService } from './categories.service';
import { CategoriesComponent } from './categories.component';

@NgModule({
  declarations: [CategoriesComponent],
  exports: [CategoriesComponent],
  imports: [CommonModule, CategoryModule],
  providers: [CategoriesService],
})
export class CategoriesModule {}
