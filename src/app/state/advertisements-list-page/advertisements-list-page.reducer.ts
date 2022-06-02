import { createReducer, on } from '@ngrx/store';

import { LoadingStatus } from '../../shared/interfaces/loading-status';
import { IAdvertisementRequestInterface } from '../../advertisements-list/interfaces/advertisement-request.interface';
import { DEFAULT_LOADING_STATUS } from '../../shared/constants/lodaing-default-status';
import { AdvertisementsListPageActions } from './advertisements-list-page.actions';

export const ADVERTISEMENTS_LIST_PAGE = 'advertisementsListPage';

export interface AdvertisementsListPageState {
  advertisementsLoadingStatus: LoadingStatus;
  advertisements: IAdvertisementRequestInterface;
}

const initialState: AdvertisementsListPageState = {
  advertisementsLoadingStatus: DEFAULT_LOADING_STATUS,
  advertisements: { advertisementCount: null, advertisements: [] },
};

export const ADVERTISEMENTS_LIST_PAGE_REDUCER = createReducer(
  initialState,
  on(
    AdvertisementsListPageActions.getAdvertisementsRequest,
    (state): AdvertisementsListPageState => ({
      ...state,
      advertisementsLoadingStatus: DEFAULT_LOADING_STATUS,
    })
  ),
  on(
    AdvertisementsListPageActions.getAdvertisementsSuccess,
    (state, { advertisements }): AdvertisementsListPageState => ({
      ...state,
      advertisements,
      advertisementsLoadingStatus: {
        loading: false,
        loaded: true,
        error: null,
      },
    })
  ),
  on(
    AdvertisementsListPageActions.getAdvertisementsError,
    (state, { error }): AdvertisementsListPageState => ({
      ...state,
      advertisementsLoadingStatus: { loading: false, loaded: false, error },
    })
  )
);