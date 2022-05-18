import { createReducer, on } from '@ngrx/store';

import { Category } from '../../categories/model/category.model';
import { DEFAULT_LOADING_STATUS } from '../../shared/main-dashboard/constants/lodaing-default-status';
import { LoadingStatus } from '../../shared/main-dashboard/interfaces/loading-status';
import { CategoriesActions } from './main-dashboard.actions';

export const CATEGORIES = 'categories';

export interface CategoriesState {
  categoriesLoadingStatus: LoadingStatus;
  categories: Category[];
}

const initialState: CategoriesState = {
  categoriesLoadingStatus: DEFAULT_LOADING_STATUS,
  categories: [],
};

export const CATEGORIES_REDUCER = createReducer(
  initialState,
  on(
    CategoriesActions.getCategoriesRequest,
    (state): CategoriesState => ({
      ...state,
      categoriesLoadingStatus: { loading: true, loaded: false, error: null },
    })
  ),
  on(
    CategoriesActions.getCategoriesSuccess,
    (state, { categories }): CategoriesState => ({
      ...state,
      categories,
      categoriesLoadingStatus: { loading: false, loaded: true, error: null },
    })
  ),
  on(
    CategoriesActions.getCategoriesError,
    (state, { error }): CategoriesState => ({
      ...state,
      categoriesLoadingStatus: { loading: false, loaded: false, error },
    })
  )
);
