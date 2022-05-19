import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppContainerComponent } from './app-container.component';
import { AppComponent } from './app.component';
import { MainDashboardModule } from './pages/main-dashboard/main-dashboard.module';
import { AppRoutingModule } from './app-routing.module';
import { ErrorPageModule } from './pages/error-page/error-page.module';
import { StateModule } from './state/state.module';
import { IconSerializeService } from './shared/services/icon-serialize.service';

@NgModule({
  declarations: [AppComponent, AppContainerComponent],
  imports: [
    MainDashboardModule,
    ErrorPageModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    StateModule,
  ],
  providers: [IconSerializeService],
  bootstrap: [AppContainerComponent],
})
export class AppModule {}
