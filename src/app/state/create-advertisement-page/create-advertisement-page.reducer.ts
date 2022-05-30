import { createReducer } from '@ngrx/store';

export interface CreateAdvertisementPageState {}

export const CREATE_ADVERTISEMENT_PAGE = 'createAdvertisementPage';

const initialState = {};

export const CREATE_ADVERTISEMENT_PAGE_REDUCER = createReducer(initialState);
