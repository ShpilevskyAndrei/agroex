import { createReducer, on } from '@ngrx/store';

import { IAdvertisementRequestInterface } from '../../shared/components/advertisements-list/interfaces/advertisement-request.interface';
import { DEFAULT_LOADING_STATUS } from '../../shared/constants/lodaing-default-status';
import { LoadingStatus } from '../../shared/interfaces/loading-status';
import { AccountPageActions } from './account-page.actions';
import { IMyOrdersInterface } from '../../pages/account-page/my-orders/interfaces/my-orders-request.interface';
import {
  BETTING_ACTIVE_TAB,
  BETTING_OUTBID_TAB,
} from '../../pages/account-page/my-betting/constants/my-betting-tab-options';
import { MY_ADVERTISEMENTS_ACTIVE_TAB } from '../../pages/account-page/my-advertisements/constants/my-advertisements-tab-options';

export interface AccountPageState {
  myAdvertisements: IAdvertisementRequestInterface;
  myBettings: IAdvertisementRequestInterface;
  myOrders: IMyOrdersInterface[];
  myAdvertisementTab: string;
  myBettingTab: string;
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
  myAdvertisementTab: MY_ADVERTISEMENTS_ACTIVE_TAB,
  myBettingTab: BETTING_ACTIVE_TAB,
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
    (state, { selectUserData, myBettings, myBettingTab }): AccountPageState => {
      return {
        ...state,
        myBettings: {
          ...myBettings,
          advertisements: myBettings.advertisements?.filter((advertisement) => {
            return myBettingTab === BETTING_OUTBID_TAB
              ? advertisement.userBets[0].user_id !== selectUserData?.id
              : advertisement.userBets[0].user_id === selectUserData?.id;
          }),
        },
        myBettingLoadingStatus: {
          loading: false,
          loaded: true,
          error: null,
        },
      };
    }
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
  ),
  on(
    AccountPageActions.getMyBettingTabRequest,
    (state, { selectedMyBettingOptionTab }): AccountPageState => ({
      ...state,
      myBettingTab: selectedMyBettingOptionTab,
    })
  )
);
