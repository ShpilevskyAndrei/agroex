import { createReducer } from '@ngrx/store';

export interface RegistrationPageState {}

export const REGISTRATION_PAGE = 'registrationPage';

const initialState = {};

export const REGISTRATION_PAGE_REDUCER = createReducer(initialState);
