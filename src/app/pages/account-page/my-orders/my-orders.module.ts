import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyOrdersComponent } from './my-orders.component';
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [MyOrdersComponent],
  imports: [CommonModule, MatIconModule],
  exports: [MyOrdersComponent],
})
export class MyOrdersModule {}
