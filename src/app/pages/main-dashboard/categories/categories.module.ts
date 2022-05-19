import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CategoriesComponent } from './categories.component';
import { CategoriesService } from './categories.service';
import { CategoryModule } from './category/category.module';

@NgModule({
  declarations: [CategoriesComponent],
  imports: [CommonModule, CategoryModule],
  providers: [CategoriesService],
  exports: [CategoriesComponent],
})
export class CategoriesModule {}
