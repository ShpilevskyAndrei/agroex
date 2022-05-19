import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import {
  ACCOUNT_PAGE_REDUCER,
  AccountPageState,
} from './account-page/account-page.reducer';
import { APP_ROOT_REDUCER, AppRootState } from './app-root/app-root.reducer';
import { MainDashboardEffects } from './main-dashboard/main-dashboard.effects';
import {
  MAIN_DASHBOARD_REDUCER,
  MainDashboardState,
} from './main-dashboard/main-dashboard.reducer';

export interface State {
  mainDashboard: MainDashboardState;
  appRoot: AppRootState;
  accountPage: AccountPageState;
}

export const ROOT_REDUCER: ActionReducerMap<State> = {
  mainDashboard: MAIN_DASHBOARD_REDUCER,
  appRoot: APP_ROOT_REDUCER,
  accountPage: ACCOUNT_PAGE_REDUCER,
};

export const ROOT_EFFECT = [MainDashboardEffects];

export const META_REDUCER: MetaReducer<State>[] = [];
