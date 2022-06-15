import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyBettingComponent } from './my-betting.component';

@NgModule({
  declarations: [MyBettingComponent],
  imports: [CommonModule],
  exports: [MyBettingComponent],
})
export class MyBettingModule {}
