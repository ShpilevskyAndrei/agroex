import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainDashboardComponent } from './main-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: MainDashboardComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainDashboardRoutingModule {}
