import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export const MapActions = {
  getMapRequest: createAction('[APP-COMPONENT] map requested'),
  getMapSuccess: createAction(
    '[APP-COMPONENT] map success',
    props<{ map: GeoJSON.FeatureCollection<GeoJSON.MultiPolygon> }>()
  ),

  getMapError: createAction(
    '[APP-COMPONENT] map error',
    props<{ error: HttpErrorResponse }>()
  ),
};
