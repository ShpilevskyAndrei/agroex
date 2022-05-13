import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CategoriesModule } from './categories/categories.module';
import { HeaderModule } from './shared/header/header.module';
import { reducers, metaReducers } from './state/reducer';
import { environment } from '../environments/environment';
import { AppEffects } from './state/effect/app.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HeaderModule,
    BrowserModule,
    BrowserAnimationsModule,
    CategoriesModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([AppEffects]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
