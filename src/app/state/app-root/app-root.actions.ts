import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { UserPanelOptionId } from '../../shared/components/header/enums/user-panel-option-id';

export const AppRootActions = {
  getUserSelectTab: createAction(
    '[APP_ROOT] select tab success',
    props<{ selectedOptionId: UserPanelOptionId }>()
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
};
