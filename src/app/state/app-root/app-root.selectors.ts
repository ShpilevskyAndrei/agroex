import { createFeatureSelector, createSelector } from '@ngrx/store';

import { APP_ROOT, AppRootState } from './app-root.reducer';

const selectGetFeatureState = createFeatureSelector<AppRootState>(APP_ROOT);

export const selectAppRootOptionId = createSelector(
  selectGetFeatureState,
  (state) => state.selectedOptionId
);
