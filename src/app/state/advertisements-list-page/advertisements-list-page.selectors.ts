import { createFeatureSelector } from '@ngrx/store';

import {
  ADVERTISEMENTS_LIST_PAGE,
  AdvertisementsListPageState,
} from './advertisements-list-page.reducer';

//TODO: need to delete this disable eslint in future, when you will have account-page selector.

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const selectGetFeatureState =
  createFeatureSelector<AdvertisementsListPageState>(ADVERTISEMENTS_LIST_PAGE);
