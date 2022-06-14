import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  MODERATION_ADVERTISEMENTS_LIST_PAGE,
  ModerateAdvertisementsListPageState,
} from './advertisements-list-page.reducer';

const selectGetFeatureState =
  createFeatureSelector<ModerateAdvertisementsListPageState>(
    MODERATION_ADVERTISEMENTS_LIST_PAGE
  );

export const selectModerateAdvertisementsLoadingStatus = createSelector(
  selectGetFeatureState,
  (state) => state.moderateAdvertisementsLoadingStatus
);
export const selectModerateAdvertisementsData = createSelector(
  selectGetFeatureState,
  (state) => state.nonModerateAdvertisements
);
