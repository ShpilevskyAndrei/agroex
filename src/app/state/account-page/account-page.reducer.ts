import { createReducer, on } from '@ngrx/store';

import { IAdvertisementRequestInterface } from '../../shared/components/advertisements-list/interfaces/advertisement-request.interface';
import { DEFAULT_LOADING_STATUS } from '../../shared/constants/lodaing-default-status';
import { LoadingStatus } from '../../shared/interfaces/loading-status';
import { AccountPageActions } from './account-page.actions';
import { IMyOrdersInterface } from '../../pages/account-page/my-orders/interfaces/my-orders-request.interface';

export interface AccountPageState {
  accountPageLoadingStatus: LoadingStatus;
  myAdvertisements: IAdvertisementRequestInterface;
  myBettings: IAdvertisementRequestInterface;
  myOrders: IMyOrdersInterface[];
}

export const ACCOUNT_PAGE = 'accountPage';

const initialState: AccountPageState = {
  accountPageLoadingStatus: DEFAULT_LOADING_STATUS,
  myAdvertisements: { advertisementCount: null, advertisements: [] },
  myBettings: { advertisementCount: null, advertisements: [] },
  myOrders: [],
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
    AccountPageActions.getConfirmDealRequest,
    (state): AccountPageState => ({
      ...state,
      accountPageLoadingStatus: DEFAULT_LOADING_STATUS,
    })
  ),
  on(
    AccountPageActions.getConfirmDealSuccess,
    (state): AccountPageState => ({
      ...state,
      accountPageLoadingStatus: {
        loading: false,
        loaded: true,
        error: null,
      },
    })
  ),
  on(
    AccountPageActions.getConfirmDealError,
    (state, { error }): AccountPageState => ({
      ...state,
      accountPageLoadingStatus: { loading: false, loaded: false, error },
    })
  ),
  on(
    AccountPageActions.getMyBettingsRequest,
    (state): AccountPageState => ({
      ...state,
      accountPageLoadingStatus: DEFAULT_LOADING_STATUS,
    })
  ),
  on(
    AccountPageActions.getMyBettingsSuccess,
    (state, { myBettings }): AccountPageState => ({
      ...state,
      myBettings,
      accountPageLoadingStatus: {
        loading: false,
        loaded: true,
        error: null,
      },
    })
  ),
  on(
    AccountPageActions.getMyBettingsError,
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
