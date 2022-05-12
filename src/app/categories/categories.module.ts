import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { CategoryModule } from './category/category.module';
import { CategoriesService } from './categories.service';

@NgModule({
  declarations: [CategoriesComponent],
  exports: [CategoriesComponent],
  imports: [CommonModule, CategoryModule],
  providers: [CategoriesService],
})
export class CategoriesModule {}
