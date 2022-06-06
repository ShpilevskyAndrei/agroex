import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateAdvertisementPageContainerComponent } from './create-advertisement-page-container.component';

const routes: Routes = [
  {
    path: '',
    component: CreateAdvertisementPageContainerComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateAdvertisementPageRoutingModule {}
