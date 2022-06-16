import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AdvertisementPageActions } from './advertisement-page.actions';
import { AdvertisementService } from '../../pages/advertisement-page/advertisement-page.service';

@Injectable()
export class AdvertisementPageEffects {
  public advertisement$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AdvertisementPageActions.getAdvertisementRequest),
      switchMap(({ slug }) =>
        this.advertisementService.getAdvertisement(slug).pipe(
          map((advertisement) =>
            AdvertisementPageActions.getAdvertisementSuccess({
              advertisement,
            })
          ),
          catchError((error: HttpErrorResponse) =>
            of(AdvertisementPageActions.getAdvertisementError({ error: error }))
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private advertisementService: AdvertisementService
  ) {}
}
