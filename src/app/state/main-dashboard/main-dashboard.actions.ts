import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

import { Category } from '../../categories/model/category.model';

export const CategoriesActions = {
  RequestAction: createAction('[CATEGORIES] categories requested'),

  SuccessAction: createAction(
    '[CATEGORIES] categories success',
    props<{ categories: Category[] }>()
  ),

  ErrorAction: createAction(
    '[CATEGORIES] categories error',
    props<{ error: HttpErrorResponse }>()
  ),
};
