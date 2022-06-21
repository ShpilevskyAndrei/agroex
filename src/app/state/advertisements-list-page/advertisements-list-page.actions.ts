import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { IAdvertisementRequestInterface } from '../../shared/components/advertisements-list/interfaces/advertisement-request.interface';

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

export const AdvertisementsListBetActions = {
  getAdvertisementsBetRequest: createAction(
    '[ADVERTISEMENTS_LIST_BET] bet requested',
    props<{ newBetOptions: Record<string, string | number> }>()
  ),

  getAdvertisementsBetSuccess: createAction(
    '[ADVERTISEMENTS_LIST_BET] bet success'
  ),

  getAdvertisementsBetError: createAction(
    '[ADVERTISEMENTS_LIST_BET] bet error',
    props<{ error: HttpErrorResponse }>()
  ),

  getAdvertisementsBetExpired: createAction(
    '[ADVERTISEMENTS_LIST_BET] bet-expired success',
    props<{ slug: string }>()
  ),
};

export const AdvertisementsListBuyActions = {
  getAdvertisementsBuyRequest: createAction(
    '[ADVERTISEMENTS_LIST_BET] buy requested',
    props<{ slug: string | number }>()
  ),

  getAdvertisementsBuySuccess: createAction(
    '[ADVERTISEMENTS_LIST_BET] buy success'
  ),

  getAdvertisementsBuyError: createAction(
    '[ADVERTISEMENTS_LIST_BET] buy error',
    props<{ error: HttpErrorResponse }>()
  ),
};
