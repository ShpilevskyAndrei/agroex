import { createReducer, on } from '@ngrx/store';

import { DEFAULT_LOADING_STATUS } from '../../shared/constants/lodaing-default-status';
import { LoadingStatus } from '../../shared/interfaces/loading-status';
import { Category } from '../../pages/main-dashboard/categories/interfaces/category.model';
import { MainDashboardActions } from './main-dashboard.actions';

export const MAIN_DASHBOARD = 'mainDashboard';

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
