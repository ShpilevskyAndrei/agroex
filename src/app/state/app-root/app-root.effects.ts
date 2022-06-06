import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of } from 'rxjs';
import { AppRootActions } from './app-root.actions';

@Injectable()
export class AppRootEffects {
  public appRoot$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppRootActions.getAppRootRequest),
      catchError((error: HttpErrorResponse) =>
        of(AppRootActions.getAppRootError({ error: error }))
      )
    );
  });

  constructor(private actions$: Actions) {}
}
