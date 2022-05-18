import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { CategoriesEffects } from './categories/categories-store/categories.effects';
import {
  CATEGORIES_REDUCER,
  CategoriesState,
} from './categories/categories-store/categories.reducer';

export interface State {
  categories: CategoriesState;
}

export const RootReducer: ActionReducerMap<State> = {
  categories: CATEGORIES_REDUCER,
};

export const RootEffect = [CategoriesEffects];

export const metaReducers: MetaReducer<State>[] = [];
