import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';

import { metaReducers, RootEffect, RootReducer } from './index';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(RootReducer, {
      metaReducers,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot(RootEffect),
  ],
})
export class StateModule {}
