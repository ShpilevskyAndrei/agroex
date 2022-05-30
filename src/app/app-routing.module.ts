import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'registration',
    loadChildren: () =>
      import('./pages/registration-page/registration-page.module').then(
        (m) => m.RegistrationPageModule
      ),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./pages/account-page/account-page.module').then(
        (m) => m.AccountPageModule
      ),
  },
  {
    path: 'error',
    loadChildren: () =>
      import('./pages/error-page/error-page.module').then(
        (m) => m.ErrorPageModule
      ),
  },
  {
    path: 'createadvertisement',
    loadChildren: () =>
      import(
        './pages/create-advertisement-page/create-advertisement-page.module'
      ).then((m) => m.CreateAdvertisementPageModule),
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
