import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ModerationAdvertismentsContainerComponent } from './moderation-advertisments-container.component';

const routes: Routes = [
  {
    path: '',
    component: ModerationAdvertismentsContainerComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModerationAdvertismentsPageRoutingModule {}
