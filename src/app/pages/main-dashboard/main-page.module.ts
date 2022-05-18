import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './main-page.component';
import { HeaderModule } from '../../shared/header/header.module';
import { CategoriesModule } from './categories/categories.module';
import { MainPageRoutingModule } from './main-page-routing.module';

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    HeaderModule,
    CategoriesModule,
    MainPageRoutingModule,
  ],
  exports: [MainPageComponent],
})
export class MainPageModule {}
