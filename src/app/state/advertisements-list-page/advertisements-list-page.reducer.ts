import { createReducer } from '@ngrx/store';

export interface AdvertisementsListPageState {}

export const ADVERTISEMENTS_LIST_PAGE = 'advertisementsListPage';

const initialState = {};

export const ADVERTISEMENTS_LIST_PAGE_REDUCER = createReducer(initialState);
