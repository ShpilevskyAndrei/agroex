import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModule } from '../../shared/components/header/header.module';
import { AdvertisementCardComponent } from './advertisement-card.component';
import { AdvertisementCardContainerComponent } from './advertisement-card-container.component';
import { AdvertisementCardRoutingModule } from './advertisement-card-routing.module';
import { BreadcrumbsModule } from '../../shared/components/breadcrumbs/breadcrumbs.module';
import { AdvertisementButtonsModule } from '../../advertisements-list/advertisement/advertisement-buttons/advertisement-buttons.module';
import { AdvertisementPriceModule } from '../../advertisements-list/advertisement/advertisement-price/advertisement-price.module';
import { AdvertisementTitleModule } from '../../advertisements-list/advertisement/advertisement-title/advertisement-title.module';
import { MatIconModule } from '@angular/material/icon';
import { AdvertisementModule } from '../../advertisements-list/advertisement/advertisement.module';

@NgModule({
  declarations: [
    AdvertisementCardContainerComponent,
    AdvertisementCardComponent,
  ],
  imports: [
    CommonModule,
    AdvertisementButtonsModule,
    HeaderModule,
    BreadcrumbsModule,
    AdvertisementModule,
    AdvertisementPriceModule,
    AdvertisementTitleModule,
    AdvertisementCardRoutingModule,
    MatIconModule,
  ],
  exports: [AdvertisementCardContainerComponent],
})
export class AdvertisementCardModule {}
