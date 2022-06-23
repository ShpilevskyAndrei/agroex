import { createFeatureSelector, createSelector } from '@ngrx/store';

import { APP_ROOT, AppRootState } from './app-root.reducer';

const selectGetFeatureState = createFeatureSelector<AppRootState>(APP_ROOT);

export const selectAppRootOptionId = createSelector(
  selectGetFeatureState,
  (state) => state.selectedOptionId
);
export const selectMapStatus = createSelector(
  selectGetFeatureState,
  (state) => state.mapLoadingStatus
);
export const selectMapData = createSelector(
  selectGetFeatureState,
  (state) => state.map
);

export const getNotificationMessage = createSelector(
  selectGetFeatureState,
  (state) => state.notificationMessage
);
