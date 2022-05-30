import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  REGISTRATION_PAGE,
  RegistrationPageState,
} from './registration-page.reducer';

const selectGetFeatureState =
  createFeatureSelector<RegistrationPageState>(REGISTRATION_PAGE);

export const selectUserLoadingStatus = createSelector(
  selectGetFeatureState,
  (state) => state.registrationLoadingStatus
);

export const selectUserData = createSelector(
  selectGetFeatureState,
  (state) => state.user
);

export const selectUserToken = createSelector(
  selectGetFeatureState,
  (state) => state.user?.token
);
