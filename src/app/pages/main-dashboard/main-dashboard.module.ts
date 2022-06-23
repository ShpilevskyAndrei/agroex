import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';

import { MainDashboardContainerComponent } from './main-dashboard-container.component';
import { MainDashboardComponent } from './main-dashboard.component';
import { HeaderModule } from '../../shared/components/header/header.module';
import { CategoriesModule } from './categories/categories.module';
import { MainDashboardRoutingModule } from './main-dashboard-routing.module';
import { AdvertisementsListModule } from 'src/app/shared/components/advertisements-list/advertisements-list.module';
import { AdvertisementsListButtonsModule } from '../../shared/components/advertisements-list/advertisement/advertisements-list-buttons/advertisements-list-buttons.module';

@NgModule({
  declarations: [MainDashboardComponent, MainDashboardContainerComponent],
  imports: [
    CommonModule,
    HeaderModule,
    CategoriesModule,
    MainDashboardRoutingModule,
    AdvertisementsListModule,
    NgxSpinnerModule,
    AdvertisementsListButtonsModule,
  ],
  exports: [MainDashboardContainerComponent],
})
export class MainDashboardModule {}
