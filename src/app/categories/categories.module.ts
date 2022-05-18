import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesContainerComponent } from './categories-container.component';

import { CategoryModule } from './category/category.module';
import { CategoriesService } from './categories.service';
import { CategoriesComponent } from './categories.component';

@NgModule({
  declarations: [CategoriesContainerComponent, CategoriesComponent],
  exports: [CategoriesComponent, CategoriesContainerComponent],
  imports: [CommonModule, CategoryModule],
  providers: [CategoriesService],
})
export class CategoriesModule {}
