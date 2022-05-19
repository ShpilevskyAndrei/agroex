import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageContainerComponent } from './login-page-container.component';
import { LoginPageComponent } from './login-page.component';
import { LoginPageRoutingModule } from './login-page-routing.module';

@NgModule({
  declarations: [LoginPageComponent, LoginPageContainerComponent],
  imports: [CommonModule, LoginPageRoutingModule],
  exports: [LoginPageContainerComponent],
})
export class LoginPageModule {}
