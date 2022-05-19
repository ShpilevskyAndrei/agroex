import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationPageContainerComponent } from './registration-page-container.component';
import { RegistrationPageComponent } from './registration-page.component';
import { RegistrationPageRoutingModule } from './registration-page-routing.module';

@NgModule({
  declarations: [RegistrationPageComponent, RegistrationPageContainerComponent],
  imports: [CommonModule, RegistrationPageRoutingModule],
  exports: [RegistrationPageContainerComponent],
})
export class RegistrationPageModule {}
