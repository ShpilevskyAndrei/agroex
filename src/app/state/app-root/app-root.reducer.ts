import { createReducer, on } from '@ngrx/store';

import { DEFAULT_LOADING_STATUS } from '../../shared/constants/lodaing-default-status';
import { LoadingStatus } from '../../shared/interfaces/loading-status';
import { AppRootActions } from './app-root.actions';

export interface AppRootState {
  appRootLoadingStatus: LoadingStatus;
}

export const APP_ROOT = 'appRoot';

const initialState: AppRootState = {
  appRootLoadingStatus: DEFAULT_LOADING_STATUS,
};

export const APP_ROOT_REDUCER = createReducer(
  initialState,
  on(
    AppRootActions.getAppRootRequest,
    (state): AppRootState => ({
      ...state,
      appRootLoadingStatus: DEFAULT_LOADING_STATUS,
    })
  ),
  on(
    AppRootActions.getAppRootSuccess,
    (state): AppRootState => ({
      ...state,
      appRootLoadingStatus: { loading: false, loaded: true, error: null },
    })
  ),
  on(
    AppRootActions.getAppRootError,
    (state, { error }): AppRootState => ({
      ...state,
      appRootLoadingStatus: { loading: false, loaded: false, error },
    })
  )
);
