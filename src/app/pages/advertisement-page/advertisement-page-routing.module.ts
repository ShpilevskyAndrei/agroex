import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AdvertisementPageContainerComponent } from './advertisement-page-container.component';

const routes: Routes = [
  {
    path: '',
    component: AdvertisementPageContainerComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvertisementPageRoutingModule {}
