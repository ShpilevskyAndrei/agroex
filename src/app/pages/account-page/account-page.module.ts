import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountPageContainerComponent } from './account-page-container.component';
import { AccountPageComponent } from './account-page.component';
import { HeaderModule } from '../../shared/components/header/header.module';
import { AccountPageRoutingModule } from './account-page-routing.module';
import { AdvertisementsListModule } from '../../advertisements-list/advertisements-list.module';
import { MyAdvertisementsButtonsModule } from '../../advertisements-list/advertisement/my-advertisements-buttons/my-advertisements-buttons.module';

@NgModule({
  declarations: [AccountPageComponent, AccountPageContainerComponent],
  imports: [
    CommonModule,
    HeaderModule,
    AccountPageRoutingModule,
    AdvertisementsListModule,
    MyAdvertisementsButtonsModule,
  ],
  exports: [AccountPageContainerComponent],
})
export class AccountPageModule {}
