import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CategoriesModule } from './categories/categories.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './shared/header/header.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HeaderModule,
    BrowserModule,
    BrowserAnimationsModule,
    CategoriesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
