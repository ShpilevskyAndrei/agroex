import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationPageContainerComponent } from './registration-page-container.component';

import { RegistrationPageRoutingModule } from './registration-page-routing.module';

@NgModule({
  declarations: [RegistrationPageContainerComponent],
  imports: [CommonModule, RegistrationPageRoutingModule],
  exports: [RegistrationPageContainerComponent],
})
export class RegistrationPageModule {}
