import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  {
    path: 'registration',
    loadChildren: () =>
      import('./pages/registration-page/registration-page.module').then(
        (m) => m.RegistrationPageModule
      ),
    canActivate: []
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./pages/account-page/account-page.module').then(
        (m) => m.AccountPageModule
      ),
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'error',
    loadChildren: () =>
      import('./pages/error-page/error-page.module').then(
        (m) => m.ErrorPageModule
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
