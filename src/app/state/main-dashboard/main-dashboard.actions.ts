import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

import { Category } from '../../categories/model/category.model';

export const CategoriesActions = {
  getCategoriesRequest: createAction('[CATEGORIES] categories requested'),

  getCategoriesSuccess: createAction(
    '[CATEGORIES] categories success',
    props<{ categories: Category[] }>()
  ),

  getCategoriesError: createAction(
    '[CATEGORIES] categories error',
    props<{ error: HttpErrorResponse }>()
  ),
};
