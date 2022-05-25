import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { RegistrationPageContainerComponent } from './registration-page-container.component';
import { PolicyModalContentComponent } from './policy-modal-content/policy-modal-content.component';
import { RegistrationPageComponent } from './registration-page.component';
import { RegistrationPageRoutingModule } from './registration-page-routing.module';

@NgModule({
  declarations: [RegistrationPageComponent, RegistrationPageContainerComponent,PolicyModalContentComponent],
  imports: [
    CommonModule,
    RegistrationPageRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  exports: [RegistrationPageContainerComponent],
})
export class RegistrationPageModule {}
