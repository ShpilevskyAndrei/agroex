import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import firebase from 'firebase/compat';
import MessagePayload = firebase.messaging.MessagePayload;

export const AppRootActions = {
  getUserSelectTab: createAction(
    '[APP_ROOT] select tab success',
    props<{ selectedOptionId: string }>()
  ),

  getMapRequest: createAction('[APP-COMPONENT] map requested'),

  getMapSuccess: createAction(
    '[APP-COMPONENT] map success',
    props<{ map: GeoJSON.FeatureCollection<GeoJSON.MultiPolygon> }>()
  ),

  getMapError: createAction(
    '[APP-COMPONENT] map error',
    props<{ error: HttpErrorResponse }>()
  ),

  getNotificationMessage: createAction(
    '[APP_ROOT] notification message success',
    props<{ message: MessagePayload }>()
  ),

  changeNotificationStatus: createAction(
    '[APP_ROOT] change notification status success',
    props<{ message: MessagePayload }>()
  ),
};
