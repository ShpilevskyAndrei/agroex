import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

import { UserFromApi } from '../../pages/registration-page/interfaces/user-api-response.interface';
import { IUser } from '../../pages/registration-page/interfaces/user.interfase';

export const LoginPageActions = {
  getLoginRequest: createAction(
    '[LOGIN_PAGE] login requested',
    props<{ user: IUser; url: string }>()
  ),

  getLoginSuccess: createAction(
    '[LOGIN_PAGE] login success',
    props<{ user: UserFromApi }>()
  ),

  getLoginError: createAction(
    '[LOGIN_PAGE] login error',
    props<{ error: HttpErrorResponse }>()
  ),

  getLogoutSuccess: createAction('[LOGIN_PAGE] logout success'),
};
