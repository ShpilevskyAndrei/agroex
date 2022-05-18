import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountPageComponent } from './account-page.component';
import { HeaderModule } from '../../shared/header/header.module';
import { AccountPageRoutingModule } from './account-page-routing.module';

@NgModule({
  declarations: [AccountPageComponent],
  imports: [CommonModule, HeaderModule, AccountPageRoutingModule],
  exports: [AccountPageComponent],
})
export class AccountPageModule {}
