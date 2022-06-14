import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { IAdvertisementRequestInterface } from '../../shared/components/advertisements-list/interfaces/advertisement-request.interface';
import { IAdvertisementModerationRequest } from '../../moderation-advertisements-list/interfaces/advertisement.interface';

export const ModerateAdvertisementsListPageActions = {
  getNonModerateAdvertisementsRequest: createAction(
    '[NON_MODERATE_ADVERTISEMENTS_LIST] nonmoderateadvertisements requested'
  ),

  getANonModerateAdvertisementsSuccess: createAction(
    '[NON_MODERATE_ADVERTISEMENTS_LIST] nonmoderateadvertisements success',
    props<{ nonModerateAdvertisements: IAdvertisementRequestInterface }>()
  ),

  getNonModerateAdvertisementsError: createAction(
    '[NON_MODERATE_ADVERTISEMENTS_LIST] nonmoderateadvertisements error',
    props<{ error: HttpErrorResponse }>()
  ),

  getDecisionNonModerateAdvertisementsRequest: createAction(
    '[NON_MODERATE_ADVERTISEMENTS_LIST] nonmoderateadvertisements decision request',
    props<{ decision: IAdvertisementModerationRequest }>()
  ),

  getDecisionNonModerateAdvertisementsSuccess: createAction(
    '[NON_MODERATE_ADVERTISEMENTS_LIST] nonmoderateadvertisements decision success',
    props<{ decision: IAdvertisementModerationRequest }>()
  ),

  getDecisionNonModerateAdvertisementsError: createAction(
    '[NON_MODERATE_ADVERTISEMENTS_LIST] nonmoderateadvertisements decision error',
    props<{ error: HttpErrorResponse }>()
  ),
};
