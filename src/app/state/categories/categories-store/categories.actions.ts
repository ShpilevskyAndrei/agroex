import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

import { Category } from '../../../categories/model/category.model';

export const CategoriesActions = {
  REQUESTED_ACTION: createAction('[CATEGORIES] categories requested'),

  SUCCESS_ACTION: createAction(
    '[CATEGORIES] categories success',
    props<{ categories: Category[] }>()
  ),

  ERROR_ACTION: createAction(
    '[CATEGORIES] categories error',
    props<{ error: HttpErrorResponse }>()
  ),
};
