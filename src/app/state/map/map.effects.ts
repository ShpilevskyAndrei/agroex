import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MapActions } from './map.actions';
import { AppMapService } from '../../app-map.service';

@Injectable()
export class MapEffects {
  public advertisement$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MapActions.getMapRequest),
      switchMap(() =>
        this.appMapService.getMap().pipe(
          map(
            (map) => MapActions.getMapSuccess({ map }),
            catchError((error: HttpErrorResponse) =>
              of(MapActions.getMapError({ error: error }))
            )
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private appMapService: AppMapService
  ) {}
}
