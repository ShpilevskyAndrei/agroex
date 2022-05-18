import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { MainDashboardEffects } from './main-dashboard/main-dashboard.effects';
import {
  MAIN_DASHBOARD_REDUCER,
  MainDashboardState,
} from './main-dashboard/main-dashboard.reducer';

export interface State {
  mainDashboard: MainDashboardState;
}

export const ROOT_REDUCER: ActionReducerMap<State> = {
  mainDashboard: MAIN_DASHBOARD_REDUCER,
};

export const ROOT_EFFECT = [MainDashboardEffects];

export const META_REDUCER: MetaReducer<State>[] = [];
