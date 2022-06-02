import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { IAdvertisementRequestInterface } from '../../advertisements-list/interfaces/advertisement-request.interface';

export const AdvertisementsListPageActions = {
  getAdvertisementsRequest: createAction(
    '[ADVERTISEMENTS_LIST] advertisements requested'
  ),

  getAdvertisementsSuccess: createAction(
    '[ADVERTISEMENTS_LIST] advertisements success',
    props<{ advertisements: IAdvertisementRequestInterface }>()
  ),

  getAdvertisementsError: createAction(
    '[ADVERTISEMENTS_LIST] advertisements error',
    props<{ error: HttpErrorResponse }>()
  ),
};
