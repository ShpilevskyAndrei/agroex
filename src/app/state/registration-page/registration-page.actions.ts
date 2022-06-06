import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

import { IUser } from '../../shared/interfaces/user.interface';
import { IUserCredentials } from '../../shared/interfaces/user-credentials.interfase';

export const RegistrationPageActions = {
  getUserRequest: createAction(
    '[REGISTRATION_PAGE] registration requested',
    props<{ user: IUserCredentials; url: string }>()
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
