import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

import { IUser } from '../../pages/registration-page/interfaces/user-api-response.interface';
import { UserCredentials } from '../../pages/registration-page/interfaces/user.interfase';

export const RegistrationPageActions = {
  getUserRequest: createAction(
    '[REGISTRATION_PAGE] registration requested',
    props<{ user: UserCredentials; url: string }>()
  ),

  getUserSuccess: createAction(
    '[REGISTRATION_PAGE] registration success',
    props<{ user: IUser }>()
  ),

  getUserError: createAction(
    '[REGISTRATION_PAGE] registration error',
    props<{ error: HttpErrorResponse }>()
  ),

  getUserLogout: createAction('[REGISTRATION_PAGE] logout success'),
};
