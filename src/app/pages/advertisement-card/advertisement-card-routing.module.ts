import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AdvertisementCardContainerComponent } from './advertisement-card-container.component';

const routes: Routes = [
  {
    path: '',
    component: AdvertisementCardContainerComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvertisementCardRoutingModule {}
