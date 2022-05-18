import { createFeatureSelector, createSelector } from '@ngrx/store';

import { MAIN_DASHBOARD, MainDashboardState } from './main-dashboard.reducer';

const selectGetFeatureState =
  createFeatureSelector<MainDashboardState>(MAIN_DASHBOARD);

export const selectCategoriesLoadingStatus = createSelector(
  selectGetFeatureState,
  (state) => state.mainDashboardLoadingStatus
);
export const selectCategoriesData = createSelector(
  selectGetFeatureState,
  (state) => state.categories
);
