import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../../environments/environment';
import { META_REDUCER, ROOT_EFFECT, ROOT_REDUCER } from './index';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(ROOT_REDUCER, {
      metaReducers: META_REDUCER,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot(ROOT_EFFECT),
  ],
})
export class StateModule {}
