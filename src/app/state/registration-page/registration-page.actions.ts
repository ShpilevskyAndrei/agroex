import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

import { UserFromApi } from '../../pages/registration-page/interfaces/user-api-response.interface';
import { IUser } from '../../pages/registration-page/interfaces/user.interfase';

export const RegistrationPageActions = {
  getUserRequest: createAction(
    '[REGISTRATION_PAGE] registration requested',
    props<{ user: IUser; url: string }>()
  ),

  getUserSuccess: createAction(
    '[REGISTRATION_PAGE] registration success',
    props<{ user: UserFromApi }>()
  ),

  getUserError: createAction(
    '[REGISTRATION_PAGE] registration error',
    props<{ error: HttpErrorResponse }>()
  ),
};
