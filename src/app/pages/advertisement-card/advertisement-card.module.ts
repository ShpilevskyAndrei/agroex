import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModule } from '../../shared/components/header/header.module';
import { AdvertisementCardComponent } from './advertisement-card.component';
import { AdvertisementCardContainerComponent } from './advertisement-card-container.component';
import { AdvertisementCardRoutingModule } from './advertisement-card-routing.module';
import { BreadcrumbsModule } from '../../shared/components/breadcrumbs/breadcrumbs.module';

@NgModule({
  declarations: [
    AdvertisementCardContainerComponent,
    AdvertisementCardComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    BreadcrumbsModule,
    AdvertisementCardRoutingModule,
  ],
  exports: [AdvertisementCardContainerComponent],
})
export class AdvertisementCardModule {}
