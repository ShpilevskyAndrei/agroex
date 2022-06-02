import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { UserApiResponse } from '../../shared/interfaces/user.interface';
import { UserService } from '../../pages/registration-page/services/user.service';
import { RegistrationPageActions } from './registration-page.actions';

@Injectable()
export class RegistrationPageEffects {
  public user$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RegistrationPageActions.getUserRequest),
      switchMap(({ user, url }) =>
        this.userService.create(user, url).pipe(
          map((userApiResponse: UserApiResponse) =>
            RegistrationPageActions.getUserSuccess({
              user: userApiResponse.user,
            })
          ),
          catchError((error: HttpErrorResponse) =>
            of(RegistrationPageActions.getUserError({ error: error }))
          )
        )
      )
    );
  });

  constructor(private actions$: Actions, private userService: UserService) {}
}
