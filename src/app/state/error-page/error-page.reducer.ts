import { createReducer } from '@ngrx/store';

export interface ErrorPageState {}

export const ERROR_PAGE = 'errorPage';

const initialState = {};

export const ERROR_PAGE_REDUCER = createReducer(initialState);
