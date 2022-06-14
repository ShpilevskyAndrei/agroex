import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyOrdersComponent } from './my-orders.component';

@NgModule({
  declarations: [MyOrdersComponent],
  imports: [CommonModule],
  exports: [MyOrdersComponent],
})
export class MyOrdersModule {}
