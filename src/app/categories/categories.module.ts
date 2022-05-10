import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { CategoryModule } from './category/category.module';

@NgModule({
  declarations: [CategoriesComponent],
  exports: [CategoriesComponent],
  imports: [CommonModule, CategoryModule],
})
export class CategoriesModule {}
