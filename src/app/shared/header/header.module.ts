import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header.component';
<<<<<<< Updated upstream
import { MatSelectModule } from '@angular/material/select';
=======
>>>>>>> Stashed changes

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, MatSelectModule],
})
export class HeaderModule {}
