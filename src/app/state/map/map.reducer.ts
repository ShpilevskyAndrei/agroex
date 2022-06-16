import { createReducer, on } from '@ngrx/store';

import { DEFAULT_LOADING_STATUS } from '../../shared/constants/lodaing-default-status';
import { LoadingStatus } from '../../shared/interfaces/loading-status';
import { MapActions } from './map.actions';

export const MAP = 'map';

export interface MapState {
  mapLoadingStatus: LoadingStatus;
  map: GeoJSON.FeatureCollection<GeoJSON.MultiPolygon> | null;
}

const initialState: MapState = {
  mapLoadingStatus: DEFAULT_LOADING_STATUS,
  map: null,
};

export const MAP_REDUCER = createReducer(
  initialState,
  on(
    MapActions.getMapRequest,
    (state): MapState => ({
      ...state,
      mapLoadingStatus: DEFAULT_LOADING_STATUS,
    })
  ),
  on(
    MapActions.getMapSuccess,
    (state, { map }): MapState => ({
      ...state,
      map,
      mapLoadingStatus: {
        loading: false,
        loaded: true,
        error: null,
      },
    })
  ),
  on(
    MapActions.getMapError,
    (state, { error }): MapState => ({
      ...state,
      mapLoadingStatus: { loading: false, loaded: false, error },
    })
  )
);
