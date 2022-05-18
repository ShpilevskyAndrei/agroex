import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { MainDashBoardEffects } from './main-dashboard/main-dashboard.effects';
import {
  CATEGORIES_REDUCER,
  MainDashBoardState,
} from './main-dashboard/main-dashboard.reducer';

export interface State {
  mainDashBoard: MainDashBoardState;
}

export const ROOT_REDUCER: ActionReducerMap<State> = {
  mainDashBoard: CATEGORIES_REDUCER,
};

export const ROOT_EFFECT = [MainDashBoardEffects];

export const META_REDUCER: MetaReducer<State>[] = [];
