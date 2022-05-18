import { createFeatureSelector, createSelector } from '@ngrx/store';

import { MAIN_DASHBOARD, MainDashBoardState } from './main-dashboard.reducer';

const selectGetFeatureState =
  createFeatureSelector<MainDashBoardState>(MAIN_DASHBOARD);

export const selectCategoriesLoadingStatus = createSelector(
  selectGetFeatureState,
  (state) => state.mainDashBoardLoadingStatus
);
export const selectCategoriesData = createSelector(
  selectGetFeatureState,
  (state) => state.categories
);
