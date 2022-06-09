import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NgxSpinnerModule } from 'ngx-spinner';

import { HeaderModule } from '../../shared/components/header/header.module';
import { AdvertisementPageComponent } from './advertisement-page.component';
import { AdvertisementPageContainerComponent } from './advertisement-page-container.component';
import { AdvertisementPageRoutingModule } from './advertisement-page-routing.module';
import { BreadcrumbsModule } from '../../shared/components/breadcrumbs/breadcrumbs.module';
import { AdvertisementButtonsModule } from '../../advertisements-list/advertisement/advertisement-buttons/advertisement-buttons.module';
import { AdvertisementPriceModule } from '../../advertisements-list/advertisement/advertisement-price/advertisement-price.module';
import { AdvertisementTitleModule } from '../../advertisements-list/advertisement/advertisement-title/advertisement-title.module';
import { AdvertisementModule } from '../../advertisements-list/advertisement/advertisement.module';

@NgModule({
  declarations: [
    AdvertisementPageContainerComponent,
    AdvertisementPageComponent,
  ],
  imports: [
    CommonModule,
    AdvertisementButtonsModule,
    HeaderModule,
    BreadcrumbsModule,
    AdvertisementModule,
    AdvertisementPriceModule,
    AdvertisementTitleModule,
    AdvertisementPageRoutingModule,
    MatIconModule,
    NgxSpinnerModule,
  ],
  exports: [AdvertisementPageContainerComponent],
})
export class AdvertisementPageModule {}
