import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MAP, MapState } from './map.reducer';

const selectGetMapState = createFeatureSelector<MapState>(MAP);

export const selectMapStatus = createSelector(
  selectGetMapState,
  (state) => state.mapLoadingStatus
);
export const selectMapData = createSelector(
  selectGetMapState,
  (state) => state.map
);
