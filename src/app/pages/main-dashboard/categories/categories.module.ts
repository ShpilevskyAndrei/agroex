import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AdvertisementsListButtonsModule } from '../../../shared/components/advertisements-list/advertisement/advertisements-list-buttons/advertisements-list-buttons.module';
import { AdvertisementsListModule } from '../../../shared/components/advertisements-list/advertisements-list.module';
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
    AdvertisementsListModule,
    AdvertisementsListButtonsModule,
    NgxSpinnerModule,
  ],
  providers: [CategoriesService],
  exports: [CategoriesComponent],
})
export class CategoriesModule {}
