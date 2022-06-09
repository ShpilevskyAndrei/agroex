import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { IAdvertisementRequestInterface } from '../../advertisements-list/interfaces/advertisement-request.interface';
import { IAdvertisementModerationRequest } from 'src/app/moderation-advertisments-list/interfaces/advertisement.interface';

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

  getDecisionNonModerateAdvertisements: createAction(
    '[NON_MODERATE_ADVERTISEMENTS_LIST] nonmoderateadvertisements decision',
    props<{ decision: IAdvertisementModerationRequest }>()
  ),
};
