import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainDashboardModule } from './pages/main-dashboard/main-dashboard.module';
import { AppRoutingModule } from './app-routing.module';
import { ErrorPageModule } from './pages/error-page/error-page.module';
import { StateModule } from './state/state.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    MainDashboardModule,
    ErrorPageModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    StateModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
