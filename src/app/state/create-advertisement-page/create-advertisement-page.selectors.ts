import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  CREATE_ADVERTISEMENT_PAGE,
  CreateAdvertisementPageState,
} from './create-advertisement-page.reducer';

const selectGetFeatureState =
  createFeatureSelector<CreateAdvertisementPageState>(
    CREATE_ADVERTISEMENT_PAGE
  );
export const selectCreateAdvertisementLoadingStatus = createSelector(
  selectGetFeatureState,
  (state) => state.createAdvertisementLoadingStatus
);
