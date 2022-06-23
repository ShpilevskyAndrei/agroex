import { createReducer, on } from '@ngrx/store';

import { LoadingStatus } from '../../shared/interfaces/loading-status';
import { IAdvertisementRequestInterface } from '../../shared/components/advertisements-list/interfaces/advertisement-request.interface';
import { DEFAULT_LOADING_STATUS } from '../../shared/constants/lodaing-default-status';
import {
  AdvertisementsListDealActions,
  AdvertisementsListPageActions,
} from './advertisements-list-page.actions';
import { IAdvertisementInterface } from '../../shared/components/advertisements-list/interfaces/advertisement.interface';

export const ADVERTISEMENTS_LIST_PAGE = 'advertisementsListPage';

export interface AdvertisementsListPageState {
  advertisementsLoadingStatus: LoadingStatus;
  advertisementsBetLoadingStatus: LoadingStatus;
  advertisementsBuyLoadingStatus: LoadingStatus;
  advertisements: IAdvertisementRequestInterface;
  categoryTab: string;
}

const initialState: AdvertisementsListPageState = {
  advertisementsLoadingStatus: DEFAULT_LOADING_STATUS,
  advertisementsBetLoadingStatus: DEFAULT_LOADING_STATUS,
  advertisementsBuyLoadingStatus: DEFAULT_LOADING_STATUS,
  advertisements: { advertisementCount: null, advertisements: [] },
  categoryTab: 'Fruits',
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
  ),
  on(
    AdvertisementsListDealActions.getAdvertisementsBetRequest,
    (state): AdvertisementsListPageState => ({
      ...state,
      advertisementsLoadingStatus: DEFAULT_LOADING_STATUS,
      advertisementsBetLoadingStatus: DEFAULT_LOADING_STATUS,
    })
  ),
  on(
    AdvertisementsListDealActions.getAdvertisementsBetSuccess,
    (state): AdvertisementsListPageState => ({
      ...state,
      advertisementsBetLoadingStatus: {
        loading: false,
        loaded: true,
        error: null,
      },
    })
  ),
  on(
    AdvertisementsListDealActions.getAdvertisementsBetError,
    (state, { error }): AdvertisementsListPageState => ({
      ...state,
      advertisementsLoadingStatus: {
        loading: false,
        loaded: true,
        error: null,
      },
      advertisementsBetLoadingStatus: { loading: false, loaded: false, error },
    })
  ),
  on(
    AdvertisementsListDealActions.getAdvertisementsBetExpired,
    (state, { slug }): AdvertisementsListPageState => {
      const updateAdvertisements = state.advertisements.advertisements?.map(
        (adv: IAdvertisementInterface) => {
          if (adv.slug === slug) {
            return {
              ...adv,
              userBets: [],
            };
          }
          return adv;
        }
      );
      return {
        ...state,
        advertisements: {
          ...state.advertisements,
          advertisements: updateAdvertisements,
        },
        advertisementsLoadingStatus: DEFAULT_LOADING_STATUS,
        advertisementsBetLoadingStatus: DEFAULT_LOADING_STATUS,
      };
    }
  ),
  on(
    AdvertisementsListDealActions.getAdvertisementsBuyRequest,
    (state): AdvertisementsListPageState => ({
      ...state,
      advertisementsLoadingStatus: DEFAULT_LOADING_STATUS,
      advertisementsBuyLoadingStatus: DEFAULT_LOADING_STATUS,
    })
  ),
  on(
    AdvertisementsListDealActions.getAdvertisementsBuySuccess,
    (state): AdvertisementsListPageState => ({
      ...state,
      advertisementsBuyLoadingStatus: {
        loading: false,
        loaded: true,
        error: null,
      },
    })
  ),
  on(
    AdvertisementsListDealActions.getAdvertisementsBuyError,
    (state, { error }): AdvertisementsListPageState => ({
      ...state,
      advertisementsLoadingStatus: {
        loading: false,
        loaded: true,
        error: null,
      },
      advertisementsBetLoadingStatus: { loading: false, loaded: false, error },
    })
  ),
  on(
    AdvertisementsListPageActions.getCategoryTabRequest,
    (state, { selectedOptionId }): AdvertisementsListPageState => ({
      ...state,
      categoryTab: selectedOptionId,
    })
  )
);
