import { createReducer, on } from '@ngrx/store';
import { Category } from '../../../categories/model/category.model';
import {
  DEFAULT_LOADING_STATUS,
  LoadingStatus,
} from '../../../shared/header/interfaces/loading-status';
import { REQUESTED_ACTION, SUCCESS_ACTION } from './categories.actions';

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
      categoriesLoadingStatus: { loading: true, loaded: false },
    })
  ),
  on(
    SUCCESS_ACTION,
    (state, { categories }): CategoriesState => ({
      ...state,
      categories,
      categoriesLoadingStatus: { loading: false, loaded: true },
    })
  )
);
