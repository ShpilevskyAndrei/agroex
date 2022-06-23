import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { ModeratorGuard } from './guards/moderator.guard';

const routes: Routes = [
  {
    path: 'registration',
    loadChildren: () =>
      import('./pages/registration-page/registration-page.module').then(
        (m) => m.RegistrationPageModule
      ),
    data: {
      isRegistrationPage: true,
    },
    canLoad: [AuthGuard],
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./pages/account-page/account-page.module').then(
        (m) => m.AccountPageModule
      ),
    canLoad: [AuthGuard],
  },
  {
    path: 'error',
    loadChildren: () =>
      import('./pages/error-page/error-page.module').then(
        (m) => m.ErrorPageModule
      ),
  },
  {
    path: 'create-advertisement',
    loadChildren: () =>
      import(
        './pages/create-advertisement-page/create-advertisement-page.module'
      ).then((m) => m.CreateAdvertisementPageModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'moderation-advertisements',
    loadChildren: () =>
      import(
        './pages/moderation-advertisements/moderation-advertisements.module'
      ).then((m) => m.ModerationAdvertisementsPageModule),
    canLoad: [ModeratorGuard],
  },
  {
    path: 'advertisement/:slug',
    loadChildren: () =>
      import('./pages/advertisement-page/advertisement-page.module').then(
        (m) => m.AdvertisementPageModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/main-dashboard/main-dashboard.module').then(
        (m) => m.MainDashboardModule
      ),
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
