import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ACCOUNT_PAGE, AccountPageState } from './account-page.reducer';

const selectGetFeatureState =
  createFeatureSelector<AccountPageState>(ACCOUNT_PAGE);

export const selectMyAdvertisementsLoadingStatus = createSelector(
  selectGetFeatureState,
  (state) => state.myAdvertisementLoadingStatus
);
export const selectMyAdvertisementsData = createSelector(
  selectGetFeatureState,
  (state) => state.myAdvertisements
);

export const selectMyBettingsLoadingStatus = createSelector(
  selectGetFeatureState,
  (state) => state.myBettingLoadingStatus
);
export const selectMyBettingsData = createSelector(
  selectGetFeatureState,
  (state) => state.myBettings
);

export const selectMyOrdersLoadingStatus = createSelector(
  selectGetFeatureState,
  (state) => state.myOrderLoadingStatus
);
export const selectMyOrdersData = createSelector(
  selectGetFeatureState,
  (state) => state.myOrders
);
export const selectMyAdvertisementTab = createSelector(
  selectGetFeatureState,
  (state) => state.myAdvertisementTab
);

export const selectMyBettingTab = createSelector(
  selectGetFeatureState,
  (state) => state.myBettingTab
);
