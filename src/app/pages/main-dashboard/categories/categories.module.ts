import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';

import { CategoriesComponent } from './categories.component';
import { CategoriesService } from './categories.service';
import { CategoryModule } from './category/category.module';

@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    CategoryModule,
    MatTabsModule,
    MatListModule,
    NgxSpinnerModule,
  ],
  providers: [CategoriesService],
  exports: [CategoriesComponent],
})
export class CategoriesModule {}
