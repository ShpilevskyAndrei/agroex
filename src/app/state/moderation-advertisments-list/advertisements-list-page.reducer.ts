import { createReducer, on } from '@ngrx/store';

import { LoadingStatus } from '../../shared/interfaces/loading-status';
import { IAdvertisementRequestInterface } from '../../advertisements-list/interfaces/advertisement-request.interface';
import { DEFAULT_LOADING_STATUS } from '../../shared/constants/lodaing-default-status';
import { ModerateAdvertisementsListPageActions } from './advertisements-list-page.actions';
import { IAdvertisementInterface } from 'src/app/advertisements-list/interfaces/advertisement.interface';

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
  ),
  on(
    ModerateAdvertisementsListPageActions.getDecisionNonModerateAdvertisements,
    (state, { decision }): ModerateAdvertisementsListPageState => {
      const advNotModerated =
        state.nonModerateAdvertisements.advertisements.filter(
          (adv: IAdvertisementInterface) =>
            adv.slug !== decision.advertisements.slug
        );
      let advNotModeratedCount =
        (state.nonModerateAdvertisements?.advertisementCount || 1) - 1;
      return {
        ...state,
        nonModerateAdvertisements: {
          advertisements: advNotModerated,
          advertisementCount: advNotModeratedCount,
        },
        moderateAdvertisementsLoadingStatus: DEFAULT_LOADING_STATUS,
      };
    }
  )
);
