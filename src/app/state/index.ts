import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { MainDashboardEffects } from './main-dashboard/main-dashboard.effects';
import {
  CATEGORIES_REDUCER,
  CategoriesState,
} from './main-dashboard/main-dashboard.reducer';

export interface State {
  categories: CategoriesState;
}

export const RootReducer: ActionReducerMap<State> = {
  categories: CATEGORIES_REDUCER,
};

export const RootEffect = [MainDashboardEffects];

export const metaReducers: MetaReducer<State>[] = [];
