import { createReducer, on } from '@ngrx/store';

import { Category } from '../../categories/model/category.model';
import { DEFAULT_LOADING_STATUS } from '../../main-dashboard/constants/lodaing-default-status';
import { LoadingStatus } from '../../main-dashboard/interfaces/loading-status';
import { MainDashboardActions } from './main-dashboard.actions';

export const MAIN_DASHBOARD = 'mainDashBoard';

export interface MainDashboardState {
  mainDashboardLoadingStatus: LoadingStatus;
  categories: Category[];
}

const initialState: MainDashboardState = {
  mainDashboardLoadingStatus: DEFAULT_LOADING_STATUS,
  categories: [],
};

export const MAIN_DASHBOARD_REDUCER = createReducer(
  initialState,
  on(
    MainDashboardActions.getCategoriesRequest,
    (state): MainDashboardState => ({
      ...state,
      mainDashboardLoadingStatus: DEFAULT_LOADING_STATUS,
    })
  ),
  on(
    MainDashboardActions.getCategoriesSuccess,
    (state, { categories }): MainDashboardState => ({
      ...state,
      categories,
      mainDashboardLoadingStatus: { loading: false, loaded: true, error: null },
    })
  ),
  on(
    MainDashboardActions.getCategoriesError,
    (state, { error }): MainDashboardState => ({
      ...state,
      mainDashboardLoadingStatus: { loading: false, loaded: false, error },
    })
  )
);
