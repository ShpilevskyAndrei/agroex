import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AccountPageContainerComponent } from './account-page-container.component';
import { AccountPageComponent } from './account-page.component';
import { HeaderModule } from '../../shared/components/header/header.module';
import { AccountPageRoutingModule } from './account-page-routing.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { MyAdvertisementsModule } from './my-advertisements/my-advertisements.module';
import { MyOrdersModule } from './my-orders/my-orders.module';
import { MyAccountModule } from './my-account/my-account.module';
import { MyBettingModule } from './my-betting/my-betting.module';

@NgModule({
  declarations: [AccountPageComponent, AccountPageContainerComponent],
  imports: [
    CommonModule,
    HeaderModule,
    AccountPageRoutingModule,
    SidebarModule,
    MyAdvertisementsModule,
    MyOrdersModule,
    MyAccountModule,
    MyBettingModule,
    NgxSpinnerModule,
  ],
  exports: [AccountPageContainerComponent],
})
export class AccountPageModule {}
