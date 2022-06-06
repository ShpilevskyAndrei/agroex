import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppContainerComponent } from './app-container.component';
import { AppComponent } from './app.component';
import { MainDashboardModule } from './pages/main-dashboard/main-dashboard.module';
import { AppRoutingModule } from './app-routing.module';
import { ErrorPageModule } from './pages/error-page/error-page.module';
import { InitialLoaderHelper } from './shared/helpers/initial-loader.helper';
import { IconSerializeService } from './shared/services/icon-serialize.service';
import { StateModule } from './state/state.module';
import { APPEARANCE } from './shared/constants/appearance-outline';
import { AuthGuard } from './auth.guard';

export function appLoader() {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  return () => {
    // @ts-ignore
    new InitialLoaderHelper(() => {
      console.log('31313');
    });
    return new Promise<void>((res) => {
      setTimeout(() => {
        res();
      }, 3000);
    }).then(() => InitialLoaderHelper.remove());
  };
}

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
    NgxSpinnerModule,
    StateModule,
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
    { provide: APP_INITIALIZER, useFactory: appLoader, multi: true },
  ],
  bootstrap: [AppContainerComponent],
})
export class AppModule {}
