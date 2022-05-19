import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CategoriesContainerComponent } from './categories-container.component';
import { CategoriesComponent } from './categories.component';
import { CategoriesService } from './categories.service';
import { CategoryModule } from './category/category.module';

@NgModule({
  declarations: [CategoriesContainerComponent, CategoriesComponent],
  exports: [CategoriesComponent, CategoriesContainerComponent],
  imports: [CommonModule, CategoryModule],
  providers: [CategoriesService],
})
export class CategoriesModule {}
