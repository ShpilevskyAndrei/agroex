import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountPageContainerComponent } from './account-page-container.component';
import { AccountPageComponent } from './account-page.component';
import { HeaderModule } from '../../shared/components/header/header.module';
import { AccountPageRoutingModule } from './account-page-routing.module';

@NgModule({
  declarations: [AccountPageComponent, AccountPageContainerComponent],
  imports: [CommonModule, HeaderModule, AccountPageRoutingModule],
  exports: [AccountPageContainerComponent],
})
export class AccountPageModule {}
