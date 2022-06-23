import { createReducer, on } from '@ngrx/store';

import { LoadingStatus } from '../../shared/interfaces/loading-status';
import { IAdvertisementRequestInterface } from '../../shared/components/advertisements-list/interfaces/advertisement-request.interface';
import { DEFAULT_LOADING_STATUS } from '../../shared/constants/lodaing-default-status';
import { ModerationAdvertisementsActions } from './moderation-advertisements.actions';
import { IAdvertisementInterface } from '../../shared/components/advertisements-list/interfaces/advertisement.interface';

export const MODERATION_ADVERTISEMENTS = 'moderationAdvertisements';

export interface ModerationAdvertisementsState {
  moderateAdvertisementsLoadingStatus: LoadingStatus;
  nonModerationAdvertisements: IAdvertisementRequestInterface;
  sendModerateAdvertisementsLoadingStatus: LoadingStatus;
}

const initialState: ModerationAdvertisementsState = {
  moderateAdvertisementsLoadingStatus: DEFAULT_LOADING_STATUS,
  sendModerateAdvertisementsLoadingStatus: DEFAULT_LOADING_STATUS,
  nonModerationAdvertisements: { advertisementCount: 0, advertisements: [] },
};

export const MODERATION_ADVERTISEMENTS_REDUCER = createReducer(
  initialState,
  on(
    ModerationAdvertisementsActions.getNonModerationAdvertisementsRequest,
    (state): ModerationAdvertisementsState => ({
      ...state,
      moderateAdvertisementsLoadingStatus: DEFAULT_LOADING_STATUS,
    })
  ),
  on(
    ModerationAdvertisementsActions.getNonModerationAdvertisementsSuccess,
    (
      state,
      { nonModerationAdvertisements }
    ): ModerationAdvertisementsState => ({
      ...state,
      nonModerationAdvertisements,
      moderateAdvertisementsLoadingStatus: {
        loading: false,
        loaded: true,
        error: null,
      },
    })
  ),
  on(
    ModerationAdvertisementsActions.getNonModerationAdvertisementsError,
    (state, { error }): ModerationAdvertisementsState => ({
      ...state,
      moderateAdvertisementsLoadingStatus: {
        loading: false,
        loaded: false,
        error,
      },
    })
  ),
  on(
    ModerationAdvertisementsActions.getDecisionNonModerationAdvertisementsSuccess,
    (state, { decision }): ModerationAdvertisementsState => {
      const advNotModerated =
        state.nonModerationAdvertisements?.advertisements?.filter(
          (adv: IAdvertisementInterface) =>
            adv.slug !== decision.advertisements.slug
        );
      const advNotModeratedCount =
        (state.nonModerationAdvertisements?.advertisementCount || 1) - 1;
      return {
        ...state,
        nonModerationAdvertisements: {
          advertisements: advNotModerated,
          advertisementCount: advNotModeratedCount,
        },
      };
    }
  ),
  on(
    ModerationAdvertisementsActions.getDecisionNonModerationAdvertisementsRequest,
    (state): ModerationAdvertisementsState => ({
      ...state,
      sendModerateAdvertisementsLoadingStatus: {
        loading: false,
        loaded: true,
        error: null,
      },
    })
  ),
  on(
    ModerationAdvertisementsActions.getDecisionNonModerationAdvertisementsError,
    (state, { error }): ModerationAdvertisementsState => ({
      ...state,
      sendModerateAdvertisementsLoadingStatus: {
        loading: false,
        loaded: false,
        error,
      },
    })
  )
);
