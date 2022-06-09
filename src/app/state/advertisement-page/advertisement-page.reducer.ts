import { createReducer, on } from '@ngrx/store';

import { AdvertisementPageActions } from './advertisement-page.actions';
import { DEFAULT_LOADING_STATUS } from '../../shared/constants/lodaing-default-status';
import { IAdvertisementInterface } from '../../advertisements-list/interfaces/advertisement.interface';
import { LoadingStatus } from '../../shared/interfaces/loading-status';

export const ADVERTISEMENT_PAGE = 'advertisementPage';

export interface AdvertisementPageState {
  advertisementLoadingStatus: LoadingStatus;
  advertisement: IAdvertisementInterface | null;
}

const initialState: AdvertisementPageState = {
  advertisementLoadingStatus: DEFAULT_LOADING_STATUS,
  advertisement: null,
};

export const ADVERTISEMENT_PAGE_REDUCER = createReducer(
  initialState,
  on(
    AdvertisementPageActions.getAdvertisementRequest,
    (state): AdvertisementPageState => ({
      ...state,
      advertisementLoadingStatus: DEFAULT_LOADING_STATUS,
    })
  ),
  on(
    AdvertisementPageActions.getAdvertisementSuccess,
    (state, { advertisement }): AdvertisementPageState => ({
      ...state,
      advertisement,
      advertisementLoadingStatus: {
        loading: false,
        loaded: true,
        error: null,
      },
    })
  ),
  on(
    AdvertisementPageActions.getAdvertisementError,
    (state, { error }): AdvertisementPageState => ({
      ...state,
      advertisementLoadingStatus: { loading: false, loaded: false, error },
    })
  )
);
