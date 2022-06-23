import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  ADVERTISEMENTS_LIST_PAGE,
  AdvertisementsListPageState,
} from './advertisements-list-page.reducer';

const selectGetFeatureState =
  createFeatureSelector<AdvertisementsListPageState>(ADVERTISEMENTS_LIST_PAGE);

export const selectAdvertisementsLoadingStatus = createSelector(
  selectGetFeatureState,
  (state) => state.advertisementsLoadingStatus
);
export const selectAdvertisementsData = createSelector(
  selectGetFeatureState,
  (state) => state.advertisements
);
export const selectCategoryTab = createSelector(
  selectGetFeatureState,
  (state) => state.categoryTab
);
