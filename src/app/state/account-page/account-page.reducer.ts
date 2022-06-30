import { createReducer, on } from '@ngrx/store';

import { IAdvertisementRequestInterface } from '../../shared/components/advertisements-list/interfaces/advertisement-request.interface';
import { DEFAULT_LOADING_STATUS } from '../../shared/constants/lodaing-default-status';
import { LoadingStatus } from '../../shared/interfaces/loading-status';
import { AccountPageActions } from './account-page.actions';
import { IMyOrdersInterface } from '../../pages/account-page/my-orders/interfaces/my-orders-request.interface';

export interface AccountPageState {
  myAdvertisements: IAdvertisementRequestInterface;
  myBettings: IAdvertisementRequestInterface;
  myOrders: IMyOrdersInterface[];
  myAdvertisementTab: string;
  myAdvertisementLoadingStatus: LoadingStatus;
  myBettingLoadingStatus: LoadingStatus;
  myOrderLoadingStatus: LoadingStatus;
}

export const ACCOUNT_PAGE = 'accountPage';

const initialState: AccountPageState = {
  myAdvertisementLoadingStatus: DEFAULT_LOADING_STATUS,
  myBettingLoadingStatus: DEFAULT_LOADING_STATUS,
  myOrderLoadingStatus: DEFAULT_LOADING_STATUS,
  myAdvertisements: { advertisementCount: null, advertisements: [] },
  myBettings: { advertisementCount: null, advertisements: [] },
  myOrders: [],
  myAdvertisementTab: 'Active',
};

export const ACCOUNT_PAGE_REDUCER = createReducer(
  initialState,
  on(
    AccountPageActions.getMyAdvertisementsRequest,
    (state): AccountPageState => ({
      ...state,
      myAdvertisementLoadingStatus: DEFAULT_LOADING_STATUS,
    })
  ),
  on(
    AccountPageActions.getMyAdvertisementsSuccess,
    (state, { myAdvertisements }): AccountPageState => ({
      ...state,
      myAdvertisements,
      myAdvertisementLoadingStatus: {
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
      myAdvertisementLoadingStatus: { loading: false, loaded: false, error },
    })
  ),
  on(
    AccountPageActions.getConfirmDealRequest,
    (state): AccountPageState => ({
      ...state,
      myAdvertisementLoadingStatus: DEFAULT_LOADING_STATUS,
    })
  ),
  on(
    AccountPageActions.getConfirmDealSuccess,
    (state): AccountPageState => ({
      ...state,
      myAdvertisementLoadingStatus: {
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
      myAdvertisementLoadingStatus: { loading: false, loaded: false, error },
    })
  ),
  on(
    AccountPageActions.getMyBettingsRequest,
    (state): AccountPageState => ({
      ...state,
      myBettingLoadingStatus: DEFAULT_LOADING_STATUS,
    })
  ),
  on(
    AccountPageActions.getMyBettingsSuccess,
    (state, { myBettings }): AccountPageState => ({
      ...state,
      myBettings,
      myBettingLoadingStatus: {
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
      myBettingLoadingStatus: { loading: false, loaded: false, error },
    })
  ),
  on(
    AccountPageActions.getMyOrdersRequest,
    (state): AccountPageState => ({
      ...state,
      myOrderLoadingStatus: DEFAULT_LOADING_STATUS,
    })
  ),
  on(
    AccountPageActions.getMyOrdersSuccess,
    (state, { myOrders }): AccountPageState => ({
      ...state,
      myOrders,
      myOrderLoadingStatus: {
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
      myOrderLoadingStatus: { loading: false, loaded: false, error },
    })
  ),
  on(
    AccountPageActions.getMyAdvertisementTabRequest,
    (state, { selectedMyAdvertisementOptionTab }): AccountPageState => ({
      ...state,
      myAdvertisementTab: selectedMyAdvertisementOptionTab,
    })
  )
);
