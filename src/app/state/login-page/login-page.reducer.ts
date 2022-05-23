import { createReducer, on } from '@ngrx/store';

import { UserFromApi } from '../../pages/registration-page/interfaces/user-api-response.interface';
import { DEFAULT_LOADING_STATUS } from '../../shared/constants/lodaing-default-status';
import { LoadingStatus } from '../../shared/interfaces/loading-status';
import { LoginPageActions } from './login-page.actions';

export interface LoginPageState {
  loginLoadingStatus: LoadingStatus;
  user: UserFromApi | null;
}

export const LOGIN_PAGE = 'loginPage';

const initialState: LoginPageState = {
  loginLoadingStatus: DEFAULT_LOADING_STATUS,
  user: null,
};

export const LOGIN_PAGE_REDUCER = createReducer(
  initialState,
  on(
    LoginPageActions.getLoginRequest,
    (state): LoginPageState => ({
      ...state,
      loginLoadingStatus: DEFAULT_LOADING_STATUS,
    })
  ),
  on(
    LoginPageActions.getLoginSuccess,
    (state, { user }): LoginPageState => ({
      ...state,
      user,
      loginLoadingStatus: { loading: false, loaded: true, error: null },
    })
  ),
  on(
    LoginPageActions.getLoginError,
    (state, { error }): LoginPageState => ({
      ...state,
      loginLoadingStatus: { loading: false, loaded: false, error },
    })
  ),
  on(
    LoginPageActions.getLogoutSuccess,
    (state): LoginPageState => ({
      ...state,
      user: null,
    })
  )
);
