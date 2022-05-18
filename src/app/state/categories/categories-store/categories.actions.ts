import { createAction, props } from '@ngrx/store';
import { Category } from '../../../categories/model/category.model';

export const REQUESTED_ACTION = createAction(
  '[CATEGORIES] categories requested'
);

export const SUCCESS_ACTION = createAction(
  '[CATEGORIES] categories success',
  props<{ categories: Category[] }>()
);

export const ERROR_ACTION = createAction(
  '[CATEGORIES] categories error',
  props<{ error: string }>()
);
