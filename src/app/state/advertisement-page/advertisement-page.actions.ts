import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { IAdvertisementInterface } from '../../advertisements-list/interfaces/advertisement.interface';

export const AdvertisementPageActions = {
  getAdvertisementRequest: createAction(
    '[ADVERTISEMENT] advertisement requested',
    props<{ slug: string | null }>()
  ),

  getAdvertisementSuccess: createAction(
    '[ADVERTISEMENT] advertisement success',
    props<{ advertisement: IAdvertisementInterface | null }>()
  ),

  getAdvertisementError: createAction(
    '[ADVERTISEMENT] advertisement error',
    props<{ error: HttpErrorResponse }>()
  ),
};
