import { createReducer, on } from '@ngrx/store';

import { UserPanelOptionId } from '../../shared/components/header/enums/user-panel-option-id';
import { DEFAULT_LOADING_STATUS } from '../../shared/constants/lodaing-default-status';
import { LoadingStatus } from '../../shared/interfaces/loading-status';
import { AppRootActions } from './app-root.actions';

export interface AppRootState {
  appRootLoadingStatus: LoadingStatus;
  selectedOptionId: UserPanelOptionId;
}

export const APP_ROOT = 'appRoot';

const initialState = {
  appRootLoadingStatus: DEFAULT_LOADING_STATUS,
  selectedOptionId: UserPanelOptionId.MyAccount,
};

export const APP_ROOT_REDUCER = createReducer(
  initialState,
  on(
    AppRootActions.getUserSelectTab,
    (state, { selectedOptionId }): AppRootState => ({
      ...state,
      selectedOptionId,
      appRootLoadingStatus: DEFAULT_LOADING_STATUS,
    })
  )
);
