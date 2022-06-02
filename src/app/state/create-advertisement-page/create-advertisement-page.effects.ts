import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { CreateAdvertisementService } from '../../pages/create-advertisement-page/services/create-advertisement.service';
import { CreateAdvertisementPageActions } from './create-advertisement-page.actions';

@Injectable()
export class CreateAdvertisementPageEffects {
  public createAdvertisement$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CreateAdvertisementPageActions.createAdvertisementRequest),
      switchMap(({ formAdvertisement }) =>
        this.createAdvertisementService.create(formAdvertisement).pipe(
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
    private createAdvertisementService: CreateAdvertisementService
  ) {}
}
