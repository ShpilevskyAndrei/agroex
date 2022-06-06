import { createReducer } from '@ngrx/store';

export interface AppRootState {}

export const APP_ROOT = 'appRoot';

const initialState = {};

export const APP_ROOT_REDUCER = createReducer(initialState);
