import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ACCOUNT_PAGE, AccountPageState } from './account-page.reducer';

const selectGetFeatureState =
  createFeatureSelector<AccountPageState>(ACCOUNT_PAGE);

export const selectMyAdvertisementsLoadingStatus = createSelector(
  selectGetFeatureState,
  (state) => state.accountPageLoadingStatus
);
export const selectMyAdvertisementsData = createSelector(
  selectGetFeatureState,
  (state) => state.myAdvertisements
);
