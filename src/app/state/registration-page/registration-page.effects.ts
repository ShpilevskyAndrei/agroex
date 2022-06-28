import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { AgroexToastService, ToastType } from 'ngx-agroex-toast';

import { UserApiResponse } from '../../shared/interfaces/user.interface';
import { UserService } from '../../pages/registration-page/services/user.service';
import { RegistrationPageActions } from './registration-page.actions';
import { EMPTY_ACTION } from '../../shared/constants/empty-action';

@Injectable()
export class RegistrationPageEffects {
  public user$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RegistrationPageActions.getUserRequest),
      switchMap(({ user, url }) =>
        this.userService.create(user, url).pipe(
          map((userApiResponse: UserApiResponse) => {
            this.toastService.addToast({
              title: `You have ${
                url === 'register' ? '' : 'logged in'
              } successfully${url === 'register' ? ' registered' : ''}!`,
              toastType: ToastType.Success,
              width: '60vw',
              buttonText: 'Ok',
            });

            return RegistrationPageActions.getUserSuccess({
              user: userApiResponse.user,
            });
          }),
          catchError((error: HttpErrorResponse) => {
            this.toastService.addToast({
              title: `The user can not ${
                url === 'register' ? 'created' : 'log in'
              }`,
              message: `${
                url === 'register'
                  ? error.error.message
                  : 'Incorrect data entered'
              }`,
              toastType: ToastType.Error,
              width: '408px',
            });

            return of(RegistrationPageActions.getUserError({ error: error }));
          })
        )
      )
    );
  });

  public logOut$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RegistrationPageActions.getUserLogout),
      switchMap(() => {
        this.toastService.addToast({
          title: `You have logged out of your account`,
          toastType: ToastType.Info,
          width: '60vw',
          buttonText: 'Ok',
        });

        return EMPTY_ACTION;
      })
    );
  });

  public addNotificationToken$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RegistrationPageActions.getUserSuccess),
      switchMap(({ user }) =>
        this.userService
          .addNotificationToken(user.token)
          .pipe(mergeMap(() => EMPTY_ACTION))
      )
    );
  });

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private toastService: AgroexToastService
  ) {}
}
