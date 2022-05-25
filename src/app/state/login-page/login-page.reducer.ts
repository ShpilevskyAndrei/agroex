import { createReducer } from '@ngrx/store';

export interface LoginPageState {}

export const LOGIN_PAGE = 'loginPage';

const initialState = {};

export const LOGIN_PAGE_REDUCER = createReducer(initialState);
