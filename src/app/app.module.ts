import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CategoriesModule } from './categories/categories.module';
import { HeaderModule } from './shared/header/header.module';
import { StateModule } from './state/state.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HeaderModule,
    BrowserModule,
    BrowserAnimationsModule,
    CategoriesModule,
    HttpClientModule,
    StateModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
