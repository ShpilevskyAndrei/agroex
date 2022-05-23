import { createFeatureSelector, createSelector } from '@ngrx/store';

import { LOGIN_PAGE, LoginPageState } from './login-page.reducer';

const selectGetFeatureState = createFeatureSelector<LoginPageState>(LOGIN_PAGE);

export const selectLoginLoadingStatus = createSelector(
  selectGetFeatureState,
  (state) => state.loginLoadingStatus
);
export const selectLoginData = createSelector(
  selectGetFeatureState,
  (state) => state.user
);
