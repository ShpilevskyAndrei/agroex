import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationPageComponent } from './registration-page.component';
import { RegistrationPageRoutingModule } from './registration-page-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { PolicyModalContentComponent } from './policy-modal-content/policy-modal-content.component';

@NgModule({
  declarations: [RegistrationPageComponent, PolicyModalContentComponent],
  entryComponents: [PolicyModalContentComponent],
  imports: [
    CommonModule,
    RegistrationPageRoutingModule,
    MatButtonModule,
    MatDialogModule,
  ],
  exports: [RegistrationPageComponent],
})
export class RegistrationPageModule {}
