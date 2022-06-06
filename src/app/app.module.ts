import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';

import { AppContainerComponent } from './app-container.component';
import { AppComponent } from './app.component';
import { MainDashboardModule } from './pages/main-dashboard/main-dashboard.module';
import { AppRoutingModule } from './app-routing.module';
import { ErrorPageModule } from './pages/error-page/error-page.module';
import { IconSerializeService } from './shared/services/icon-serialize.service';
import { StateModule } from './state/state.module';
import { APPEARANCE } from './shared/constants/appearance-outline';
import { AuthGuard } from './auth.guard';
import { HeaderModule } from './shared/components/header/header.module';
import { BreadcrumbsModule } from './shared/components/breadcrumbs/breadcrumbs.module';

@NgModule({
  declarations: [AppComponent, AppContainerComponent],
  imports: [
    MainDashboardModule,
    ErrorPageModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatSnackBarModule,
    MatDialogModule,
    StateModule,
    HeaderModule,
    BreadcrumbsModule,
  ],
  providers: [
    AuthGuard,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    IconSerializeService,
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: APPEARANCE,
    },
  ],
  bootstrap: [AppContainerComponent],
})
export class AppModule {}
