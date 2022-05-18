import { createReducer, on } from '@ngrx/store';

import { Category } from '../../categories/model/category.model';
import { DEFAULT_LOADING_STATUS } from '../../main-dashboard/constants/lodaing-default-status';
import { LoadingStatus } from '../../main-dashboard/interfaces/loading-status';
import { MainDashboardActions } from './main-dashboard.actions';

export const MAIN_DASHBOARD = 'mainDashBoard';

export interface MainDashBoardState {
  mainDashBoardLoadingStatus: LoadingStatus;
  categories: Category[];
}

const initialState: MainDashBoardState = {
  mainDashBoardLoadingStatus: DEFAULT_LOADING_STATUS,
  categories: [],
};

export const CATEGORIES_REDUCER = createReducer(
  initialState,
  on(
    MainDashboardActions.getCategoriesRequest,
    (state: MainDashBoardState): MainDashBoardState => ({
      ...state,
      mainDashBoardLoadingStatus: DEFAULT_LOADING_STATUS,
    })
  ),
  on(
    MainDashboardActions.getCategoriesSuccess,
    (state: MainDashBoardState, { categories }): MainDashBoardState => ({
      ...state,
      categories,
      mainDashBoardLoadingStatus: { loading: false, loaded: true, error: null },
    })
  ),
  on(
    MainDashboardActions.getCategoriesError,
    (state: MainDashBoardState, { error }): MainDashBoardState => ({
      ...state,
      mainDashBoardLoadingStatus: { loading: false, loaded: false, error },
    })
  )
);
