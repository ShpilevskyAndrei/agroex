import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

import { AdvertisementPageComponent } from './advertisement-page.component';
import { AdvertisementPageContainerComponent } from './advertisement-page-container.component';
import { AdvertisementPageRoutingModule } from './advertisement-page-routing.module';
import { BreadcrumbsModule } from '../../shared/components/breadcrumbs/breadcrumbs.module';
import { HeaderModule } from '../../shared/components/header/header.module';
import { AdvertisementFillingPageModule } from '../../shared/components/advertisement-filling-page/advertisement-filling-page.module';

@NgModule({
  declarations: [
    AdvertisementPageContainerComponent,
    AdvertisementPageComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    BreadcrumbsModule,
    AdvertisementPageRoutingModule,
    NgxSpinnerModule,
    NgxMapboxGLModule,
    AdvertisementFillingPageModule,
  ],
  exports: [AdvertisementPageContainerComponent],
})
export class AdvertisementPageModule {}
