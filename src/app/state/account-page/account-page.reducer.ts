import { createReducer } from '@ngrx/store';

export interface AccountPageState {}

export const ACCOUNT_PAGE = 'accountPage';

const initialState = {};

export const ACCOUNT_PAGE_REDUCER = createReducer(initialState);
