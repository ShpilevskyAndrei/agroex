import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { AdvertisementRequest } from '../../advertisements-list/interfaces/advertisement-request';

export const AdvertisementsListPageActions = {
  getAdvertisementsRequest: createAction(
    '[ADVERTISEMENTS_LIST] advertisements requested'
  ),

  getAdvertisementsSuccess: createAction(
    '[ADVERTISEMENTS_LIST] advertisements success',
    props<{ advertisements: AdvertisementRequest }>()
  ),

  getAdvertisementsError: createAction(
    '[ADVERTISEMENTS_LIST] advertisements error',
    props<{ error: HttpErrorResponse }>()
  ),
};
