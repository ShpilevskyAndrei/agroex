import {
  ActionReducer,
  ActionReducerMap,
  INIT,
  MetaReducer,
  UPDATE,
} from '@ngrx/store';

import { AccountPageEffects } from './account-page/account-page.effects';
import {
  ACCOUNT_PAGE_REDUCER,
  AccountPageState,
} from './account-page/account-page.reducer';
import { AppRootEffects } from './app-root/app-root.effects';
import { APP_ROOT_REDUCER, AppRootState } from './app-root/app-root.reducer';
import { CreateAdvertisementPageEffects } from './create-advertisement-page/create-advertisement-page.effects';
import {
  CREATE_ADVERTISEMENT_PAGE_REDUCER,
  CreateAdvertisementPageState,
} from './create-advertisement-page/create-advertisement-page.reducer';
import { ErrorPageEffects } from './error-page/error-page.effects';
import {
  ERROR_PAGE_REDUCER,
  ErrorPageState,
} from './error-page/error-page.reducer';
import { MainDashboardEffects } from './main-dashboard/main-dashboard.effects';
import {
  MAIN_DASHBOARD_REDUCER,
  MainDashboardState,
} from './main-dashboard/main-dashboard.reducer';
import { RegistrationPageEffects } from './registration-page/registration-page.effects';
import {
  REGISTRATION_PAGE_REDUCER,
  RegistrationPageState,
} from './registration-page/registration-page.reducer';

export interface State {
  mainDashboard: MainDashboardState;
  appRoot: AppRootState;
  accountPage: AccountPageState;
  errorPage: ErrorPageState;
  registrationPage: RegistrationPageState;
  createAdvertisementPage: CreateAdvertisementPageState;
}

export const ROOT_REDUCER: ActionReducerMap<State> = {
  appRoot: APP_ROOT_REDUCER,
  mainDashboard: MAIN_DASHBOARD_REDUCER,
  accountPage: ACCOUNT_PAGE_REDUCER,
  errorPage: ERROR_PAGE_REDUCER,
  registrationPage: REGISTRATION_PAGE_REDUCER,
  createAdvertisementPage: CREATE_ADVERTISEMENT_PAGE_REDUCER,
};

export const ROOT_EFFECT = [
  AppRootEffects,
  MainDashboardEffects,
  AccountPageEffects,
  ErrorPageEffects,
  RegistrationPageEffects,
  CreateAdvertisementPageEffects,
];

export const hydrationMetaReducer = (
  reducer: ActionReducer<State>
): ActionReducer<State> => {
  return (state, action) => {
    if (action.type === INIT || action.type === UPDATE) {
      const storageValue = localStorage.getItem('state');
      if (storageValue) {
        try {
          return JSON.parse(storageValue);
        } catch {
          localStorage.removeItem('state');
        }
      }
    }
    const nextState = reducer(state, action);
    localStorage.setItem('state', JSON.stringify(nextState));
    return nextState;
  };
};

export const META_REDUCER: MetaReducer<State>[] = [hydrationMetaReducer];
