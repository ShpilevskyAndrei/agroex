import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { IAdvertisementRequestInterface } from '../../shared/components/advertisements-list/interfaces/advertisement-request.interface';
import { IAdvertisementModerationRequest } from '../../pages/moderation-advertisements/interfaces/advertisement.interface';

export const ModerationAdvertisementsActions = {
  getNonModerationAdvertisementsRequest: createAction(
    '[NON_MODERATION_ADVERTISEMENTS] non moderation advertisements requested'
  ),

  getNonModerationAdvertisementsSuccess: createAction(
    '[NON_MODERATION_ADVERTISEMENTS] non moderation advertisements success',
    props<{ nonModerationAdvertisements: IAdvertisementRequestInterface }>()
  ),

  getNonModerationAdvertisementsError: createAction(
    '[NON_MODERATION_ADVERTISEMENTS] non moderation advertisements error',
    props<{ error: HttpErrorResponse }>()
  ),

  getDecisionNonModerationAdvertisementsRequest: createAction(
    '[NON_MODERATION_ADVERTISEMENTS] non moderation advertisements decision request',
    props<{ decision: IAdvertisementModerationRequest }>()
  ),

  getDecisionNonModerationAdvertisementsSuccess: createAction(
    '[NON_MODERATION_ADVERTISEMENTS] non moderation advertisements decision success',
    props<{ decision: IAdvertisementModerationRequest }>()
  ),

  getDecisionNonModerationAdvertisementsError: createAction(
    '[NON_MODERATION_ADVERTISEMENTS] non moderation advertisements decision error',
    props<{ error: HttpErrorResponse }>()
  ),
};
