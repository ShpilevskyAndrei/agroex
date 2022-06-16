import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { IAdRequestInterface } from '../../shared/components/advertisements-list/interfaces/ad-request.interface';

export const AdvertisementPageActions = {
  getAdvertisementRequest: createAction(
    '[ADVERTISEMENT_PAGE] advertisement requested',
    props<{ slug: string; disableReloading?: boolean }>()
  ),

  getAdvertisementSuccess: createAction(
    '[ADVERTISEMENT_PAGE] advertisement success',
    props<{ advertisement: IAdRequestInterface | null }>()
  ),

  getAdvertisementError: createAction(
    '[ADVERTISEMENT_PAGE] advertisement error',
    props<{ error: HttpErrorResponse }>()
  ),
};
