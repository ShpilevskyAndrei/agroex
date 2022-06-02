import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap, withLatestFrom } from 'rxjs';

import { CreateAdvertisementService } from '../../pages/create-advertisement-page/services/create-advertisement.service';
import { selectUserToken } from '../registration-page/registration-page.selectors';
import { CreateAdvertisementPageActions } from './create-advertisement-page.actions';

@Injectable()
export class CreateAdvertisementPageEffects {
  public createAdvertisement$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CreateAdvertisementPageActions.createAdvertisementRequest),
      withLatestFrom(this.store.select(selectUserToken)),
      switchMap(([{ formAdvertisement }, selectUserToken]) =>
        this.createAdvertisementService
          .create(formAdvertisement, selectUserToken)
          .pipe(
            map(() =>
              CreateAdvertisementPageActions.createAdvertisementSuccess()
            ),
            catchError((error: HttpErrorResponse) =>
              of(
                CreateAdvertisementPageActions.createAdvertisementError({
                  error: error,
                })
              )
            )
          )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private createAdvertisementService: CreateAdvertisementService,
    private store: Store
  ) {}
}
