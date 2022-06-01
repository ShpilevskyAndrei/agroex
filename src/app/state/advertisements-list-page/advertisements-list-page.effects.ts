import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

import { AdvertisementsListPageActions } from './advertisements-list-page.actions';
import { AdvertisementRequest } from '../../advertisements-list/interfaces/advertisement-request';
import { AdvertisementsListService } from '../../advertisements-list/advertisements-list.service';

@Injectable()
export class AdvertisementsListPageEffects {
  public advertisements$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AdvertisementsListPageActions.getAdvertisementsRequest),
      switchMap(() =>
        this.advertisementsListService.getAdvertisements().pipe(
          map((advertisements: AdvertisementRequest) =>
            AdvertisementsListPageActions.getAdvertisementsSuccess({
              advertisements,
            })
          ),
          catchError((error: HttpErrorResponse) =>
            of(
              AdvertisementsListPageActions.getAdvertisementsError({
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
    private advertisementsListService: AdvertisementsListService
  ) {}
}
