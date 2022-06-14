import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { RegistrationPageContainerComponent } from './registration-page-container.component';
import { RegistrationPageRoutingModule } from './registration-page-routing.module';
import { RegistrationPageComponent } from './registration-page.component';
import { PolicyModalContentComponent } from './policy-modal-content/policy-modal-content.component';

@NgModule({
  declarations: [
    RegistrationPageComponent,
    RegistrationPageContainerComponent,
    PolicyModalContentComponent,
  ],
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
    MatIconModule,
  ],
  exports: [RegistrationPageContainerComponent],
})
export class RegistrationPageModule {}
