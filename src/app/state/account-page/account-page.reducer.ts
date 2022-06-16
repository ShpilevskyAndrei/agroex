import { createReducer, on } from '@ngrx/store';

import { IAdvertisementRequestInterface } from '../../shared/components/advertisements-list/interfaces/advertisement-request.interface';
import { DEFAULT_LOADING_STATUS } from '../../shared/constants/lodaing-default-status';
import { LoadingStatus } from '../../shared/interfaces/loading-status';
import { AccountPageActions } from './account-page.actions';

export interface AccountPageState {
  accountPageLoadingStatus: LoadingStatus;
  myAdvertisements: IAdvertisementRequestInterface;
  myOrders: IAdvertisementRequestInterface;
}

export const ACCOUNT_PAGE = 'accountPage';

const initialState: AccountPageState = {
  accountPageLoadingStatus: DEFAULT_LOADING_STATUS,
  myAdvertisements: { advertisementCount: null, advertisements: [] },
  myOrders: { advertisementCount: null, advertisements: [] },
};

export const ACCOUNT_PAGE_REDUCER = createReducer(
  initialState,
  on(
    AccountPageActions.getMyAdvertisementsRequest,
    (state): AccountPageState => ({
      ...state,
      accountPageLoadingStatus: DEFAULT_LOADING_STATUS,
    })
  ),
  on(
    AccountPageActions.getMyAdvertisementsSuccess,
    (state, { myAdvertisements }): AccountPageState => ({
      ...state,
      myAdvertisements,
      accountPageLoadingStatus: {
        loading: false,
        loaded: true,
        error: null,
      },
    })
  ),
  on(
    AccountPageActions.getMyAdvertisementsError,
    (state, { error }): AccountPageState => ({
      ...state,
      accountPageLoadingStatus: { loading: false, loaded: false, error },
    })
  ),
  on(
    AccountPageActions.getMyOrdersRequest,
    (state): AccountPageState => ({
      ...state,
      accountPageLoadingStatus: DEFAULT_LOADING_STATUS,
    })
  ),
  on(
    AccountPageActions.getMyOrdersSuccess,
    (state, { myOrders }): AccountPageState => ({
      ...state,
      myOrders,
      accountPageLoadingStatus: {
        loading: false,
        loaded: true,
        error: null,
      },
    })
  ),
  on(
    AccountPageActions.getMyOrdersError,
    (state, { error }): AccountPageState => ({
      ...state,
      accountPageLoadingStatus: { loading: false, loaded: false, error },
    })
  )
);
