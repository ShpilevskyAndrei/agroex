import { createReducer, on } from '@ngrx/store';

import { Category } from '../../../categories/model/category.model';
import { DEFAULT_LOADING_STATUS } from '../../../shared/categories/constants/lodaing-default-status';
import { LoadingStatus } from '../../../shared/categories/interfaces/loading-status';
import {
  ERROR_ACTION,
  REQUESTED_ACTION,
  SUCCESS_ACTION,
} from './categories.actions';

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
    REQUESTED_ACTION,
    (state): CategoriesState => ({
      ...state,
      categoriesLoadingStatus: { loading: true, loaded: false, error: '' },
    })
  ),
  on(
    SUCCESS_ACTION,
    (state, { categories }): CategoriesState => ({
      ...state,
      categories,
      categoriesLoadingStatus: { loading: false, loaded: true, error: '' },
    })
  ),
  on(
    ERROR_ACTION,
    (state, { error }): CategoriesState => ({
      ...state,
      categoriesLoadingStatus: { loading: false, loaded: true, error },
    })
  )
);
