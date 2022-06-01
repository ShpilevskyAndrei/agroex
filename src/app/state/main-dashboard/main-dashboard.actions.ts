import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

import { Category } from '../../pages/main-dashboard/categories/interfaces/category.model';

export const MainDashboardActions = {
  getCategoriesRequest: createAction('[MAIN_DASHBOARD] categories requested'),

  getCategoriesSuccess: createAction(
    '[MAIN_DASHBOARD] categories success',
    props<{ categories: Category[] }>()
  ),

  getCategoriesError: createAction(
    '[MAIN_DASHBOARD] categories error',
    props<{ error: HttpErrorResponse }>()
  ),
};
