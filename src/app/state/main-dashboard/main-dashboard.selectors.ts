import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CATEGORIES, CategoriesState } from './main-dashboard.reducer';

const selectGetFeatureState =
  createFeatureSelector<CategoriesState>(CATEGORIES);

export const selectCategoriesLoadingStatus = createSelector(
  selectGetFeatureState,
  (state) => state.categoriesLoadingStatus
);
export const selectCategoriesData = createSelector(
  selectGetFeatureState,
  (state) => state.categories
);
