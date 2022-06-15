import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ModerationadvertisementsContainerComponent } from './moderation-advertisements-container.component';

const routes: Routes = [
  {
    path: '',
    component: ModerationadvertisementsContainerComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModerationAdvertisementsRoutingModule {}
