import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

export const AppRootActions = {
  getAppRootRequest: createAction('[APP_ROOT] app root requested'),

  getAppRootSuccess: createAction('[APP_ROOT] app root success'),

  getAppRootError: createAction(
    '[APP_ROOT] app root error',
    props<{ error: HttpErrorResponse }>()
  ),
};
