import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountContainerPageComponent } from './account-page-container.component';

import { AccountPageComponent } from './account-page.component';
import { HeaderModule } from '../../shared/components/header/header.module';
import { AccountPageRoutingModule } from './account-page-routing.module';

@NgModule({
  declarations: [AccountPageComponent, AccountContainerPageComponent],
  imports: [CommonModule, HeaderModule, AccountPageRoutingModule],
  exports: [AccountContainerPageComponent],
})
export class AccountPageModule {}
