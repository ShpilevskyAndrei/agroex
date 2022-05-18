import { createReducer, on } from '@ngrx/store';

import { Category } from '../../../categories/model/category.model';
import { DEFAULT_LOADING_STATUS } from '../../../shared/categories/constants/lodaing-default-status';
import { LoadingStatus } from '../../../shared/categories/interfaces/loading-status';
import { CategoriesActions } from './categories.actions';

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
    CategoriesActions.REQUESTED_ACTION,
    (state): CategoriesState => ({
      ...state,
      categoriesLoadingStatus: { loading: true, loaded: false, error: null },
    })
  ),
  on(
    CategoriesActions.SUCCESS_ACTION,
    (state, { categories }): CategoriesState => ({
      ...state,
      categories,
      categoriesLoadingStatus: { loading: false, loaded: true, error: null },
    })
  ),
  on(
    CategoriesActions.ERROR_ACTION,
    (state, { error }): CategoriesState => ({
      ...state,
      categoriesLoadingStatus: { loading: false, loaded: false, error },
    })
  )
);
