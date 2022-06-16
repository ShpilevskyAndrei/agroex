import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export const MapActions = {
  getMapRequest: createAction('[APP-COMPONENT] map requested'),
  getMapSuccess: createAction('[APP-COMPONENT] map success'),

  getMapError: createAction(
    '[APP-COMPONENT] map error',
    props<{ error: HttpErrorResponse }>()
  ),
};
