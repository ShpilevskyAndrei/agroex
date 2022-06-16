import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  ADVERTISEMENT_PAGE,
  AdvertisementPageState,
} from './advertisement-page.reducer';

const selectGetFeatureState =
  createFeatureSelector<AdvertisementPageState>(ADVERTISEMENT_PAGE);

export const selectAdvertisementLoadingStatus = createSelector(
  selectGetFeatureState,
  (state) => state.advertisementLoadingStatus
);
export const selectAdvertisementData = createSelector(
  selectGetFeatureState,
  (state) => state.advertisement
);
