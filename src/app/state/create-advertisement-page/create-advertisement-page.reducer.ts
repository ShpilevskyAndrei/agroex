import { createReducer, on } from '@ngrx/store';

import { DEFAULT_LOADING_STATUS } from '../../shared/constants/lodaing-default-status';
import { LoadingStatus } from '../../shared/interfaces/loading-status';
import { CreateAdvertisementPageActions } from './create-advertisement-page.actions';

export interface CreateAdvertisementPageState {
  createAdvertisementLoadingStatus: LoadingStatus;
}

export const CREATE_ADVERTISEMENT_PAGE = 'createAdvertisementPage';

const initialState: CreateAdvertisementPageState = {
  createAdvertisementLoadingStatus: {
    loading: false,
    loaded: true,
    error: null,
  },
};

export const CREATE_ADVERTISEMENT_PAGE_REDUCER = createReducer(
  initialState,
  on(
    CreateAdvertisementPageActions.createAdvertisementRequest,
    (state): CreateAdvertisementPageState => ({
      ...state,
      createAdvertisementLoadingStatus: DEFAULT_LOADING_STATUS,
    })
  ),
  on(
    CreateAdvertisementPageActions.createAdvertisementSuccess,
    (state): CreateAdvertisementPageState => ({
      ...state,
      createAdvertisementLoadingStatus: {
        loading: false,
        loaded: true,
        error: null,
      },
    })
  ),
  on(
    CreateAdvertisementPageActions.createAdvertisementError,
    (state, { error }): CreateAdvertisementPageState => ({
      ...state,
      createAdvertisementLoadingStatus: {
        loading: false,
        loaded: false,
        error,
      },
    })
  ),
  on(
    CreateAdvertisementPageActions.dropAdvertisementLoadingStatus,
    (state): CreateAdvertisementPageState => ({
      ...state,
      createAdvertisementLoadingStatus:
        initialState.createAdvertisementLoadingStatus,
    })
  )
);
