import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainDashboardContainerComponent } from './main-dashboard-container.component';
import { MainDashboardComponent } from './main-dashboard.component';
import { HeaderModule } from '../../shared/components/header/header.module';
import { CategoriesModule } from './categories/categories.module';
import { MainDashboardRoutingModule } from './main-dashboard-routing.module';

@NgModule({
  declarations: [MainDashboardComponent, MainDashboardContainerComponent],
  imports: [
    CommonModule,
    HeaderModule,
    CategoriesModule,
    MainDashboardRoutingModule,
  ],
  exports: [MainDashboardContainerComponent],
})
export class MainDashboardModule {}
