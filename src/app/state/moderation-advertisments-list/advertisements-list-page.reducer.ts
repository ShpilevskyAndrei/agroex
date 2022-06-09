import { createReducer, on } from '@ngrx/store';

import { LoadingStatus } from '../../shared/interfaces/loading-status';
import { IAdvertisementRequestInterface } from '../../advertisements-list/interfaces/advertisement-request.interface';
import { DEFAULT_LOADING_STATUS } from '../../shared/constants/lodaing-default-status';
import { ModerateAdvertisementsListPageActions } from './advertisements-list-page.actions';

export const MODERATION_ADVERTISEMENTS_LIST_PAGE =
  'moderateAdvertisementsListPage';

export interface ModerateAdvertisementsListPageState {
  moderateAdvertisementsLoadingStatus: LoadingStatus;
  nonModerateAdvertisements: IAdvertisementRequestInterface;
}

const initialState: ModerateAdvertisementsListPageState = {
  moderateAdvertisementsLoadingStatus: DEFAULT_LOADING_STATUS,
  nonModerateAdvertisements: { advertisementCount: null, advertisements: [] },
};

export const MODERATION_ADVERTISEMENTS_LIST_PAGE_REDUCER = createReducer(
  initialState,
  on(
    ModerateAdvertisementsListPageActions.getNonModerateAdvertisementsRequest,
    (state): ModerateAdvertisementsListPageState => ({
      ...state,
      moderateAdvertisementsLoadingStatus: DEFAULT_LOADING_STATUS,
    })
  ),
  on(
    ModerateAdvertisementsListPageActions.getANonModerateAdvertisementsSuccess,
    (
      state,
      { nonModerateAdvertisements }
    ): ModerateAdvertisementsListPageState => ({
      ...state,
      nonModerateAdvertisements,
      moderateAdvertisementsLoadingStatus: {
        loading: false,
        loaded: true,
        error: null,
      },
    })
  ),
  on(
    ModerateAdvertisementsListPageActions.getNonModerateAdvertisementsError,
    (state, { error }): ModerateAdvertisementsListPageState => ({
      ...state,
      moderateAdvertisementsLoadingStatus: {
        loading: false,
        loaded: false,
        error,
      },
    })
  )
);
