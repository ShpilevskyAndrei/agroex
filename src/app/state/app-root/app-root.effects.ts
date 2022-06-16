import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AppMapService } from '../../app-map.service';
import { AppRootActions } from './app-root.actions';

@Injectable()
export class AppRootEffects {
  public map$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppRootActions.getMapRequest),
      switchMap(() =>
        this.appMapService.getMap().pipe(
          map(
            (map: GeoJSON.FeatureCollection<GeoJSON.MultiPolygon>) =>
              AppRootActions.getMapSuccess({ map }),
            catchError((error: HttpErrorResponse) =>
              of(AppRootActions.getMapError({ error: error }))
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
