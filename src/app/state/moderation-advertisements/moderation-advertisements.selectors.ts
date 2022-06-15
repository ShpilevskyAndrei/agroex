import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  MODERATION_ADVERTISEMENTS,
  ModerationAdvertisementsState,
} from './moderation-advertisements.reducer';

const selectGetFeatureState =
  createFeatureSelector<ModerationAdvertisementsState>(
    MODERATION_ADVERTISEMENTS
  );

export const selectModerationAdvertisementsLoadingStatus = createSelector(
  selectGetFeatureState,
  (state) => state.moderateAdvertisementsLoadingStatus
);
export const selectModerationAdvertisementsData = createSelector(
  selectGetFeatureState,
  (state) => state.nonModerationAdvertisements
);
