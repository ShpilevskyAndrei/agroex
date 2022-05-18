import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationPageComponent } from './registration-page.component';
import { RegistrationPageRoutingModule } from './registration-page-routing.module';

@NgModule({
  declarations: [RegistrationPageComponent],
  imports: [CommonModule, RegistrationPageRoutingModule],
  exports: [RegistrationPageComponent],
})
export class RegistrationPageModule {}
