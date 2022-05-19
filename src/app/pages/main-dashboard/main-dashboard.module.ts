import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainDashboardComponent } from './main-dashboard.component';
import { HeaderModule } from '../../shared/header/header.module';
import { CategoriesModule } from './categories/categories.module';
import { MainDashboardRoutingModule } from './main-dashboard-routing.module';

@NgModule({
  declarations: [MainDashboardComponent],
  imports: [
    CommonModule,
    HeaderModule,
    CategoriesModule,
    MainDashboardRoutingModule,
  ],
  exports: [MainDashboardComponent],
})
export class MainDashboardModule {}
