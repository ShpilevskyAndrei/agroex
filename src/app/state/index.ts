import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { AccountPageEffects } from './account-page/account-page.effects';
import {
  ACCOUNT_PAGE_REDUCER,
  AccountPageState,
} from './account-page/account-page.reducer';
import { AppRootEffects } from './app-root/app-root.effects';
import { APP_ROOT_REDUCER, AppRootState } from './app-root/app-root.reducer';
import { ErrorPageEffects } from './error-page/error-page.effects';
import {
  ERROR_PAGE_REDUCER,
  ErrorPageState,
} from './error-page/error-page.reducer';
import { LoginPageEffects } from './login-page/login-page.effects';
import {
  LOGIN_PAGE_REDUCER,
  LoginPageState,
} from './login-page/login-page.reducer';
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
  loginPage: LoginPageState;
  registrationPage: RegistrationPageState;
}

export const ROOT_REDUCER: ActionReducerMap<State> = {
  appRoot: APP_ROOT_REDUCER,
  mainDashboard: MAIN_DASHBOARD_REDUCER,
  accountPage: ACCOUNT_PAGE_REDUCER,
  errorPage: ERROR_PAGE_REDUCER,
  loginPage: LOGIN_PAGE_REDUCER,
  registrationPage: REGISTRATION_PAGE_REDUCER,
};

export const ROOT_EFFECT = [
  AppRootEffects,
  MainDashboardEffects,
  AccountPageEffects,
  ErrorPageEffects,
  LoginPageEffects,
  RegistrationPageEffects,
];

export const META_REDUCER: MetaReducer<State>[] = [];
