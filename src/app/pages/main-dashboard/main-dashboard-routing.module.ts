import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainDashboardContainerComponent } from './main-dashboard-container.component';

const routes: Routes = [
  {
    path: '',
    component: MainDashboardContainerComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainDashboardRoutingModule {}
