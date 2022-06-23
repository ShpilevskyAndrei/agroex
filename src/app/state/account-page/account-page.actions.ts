import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

import { IAdvertisementRequestInterface } from '../../shared/components/advertisements-list/interfaces/advertisement-request.interface';
import { IMyOrdersInterface } from '../../pages/account-page/my-orders/interfaces/my-orders-request.interface';
import { IMyBetInterface } from '../../shared/components/advertisements-list/interfaces/advertisement.interface';

export const AccountPageActions = {
  getMyAdvertisementsRequest: createAction(
    '[ACCOUNT_PAGE] my advertisements requested'
  ),

  getMyAdvertisementsSuccess: createAction(
    '[ACCOUNT_PAGE] my advertisements success',
    props<{ myAdvertisements: IAdvertisementRequestInterface }>()
  ),

  getMyAdvertisementsError: createAction(
    '[ACCOUNT_PAGE] my advertisements error',
    props<{ error: HttpErrorResponse }>()
  ),

  getConfirmDealRequest: createAction(
    '[ACCOUNT_PAGE] confirm deal requested',
    props<{ slug: string }>()
  ),

  getConfirmDealSuccess: createAction('[ACCOUNT_PAGE] confirm deal success'),

  getConfirmDealError: createAction(
    '[ACCOUNT_PAGE] confirm deal error',
    props<{ error: HttpErrorResponse }>()
  ),

  getMyBettingsRequest: createAction('[ACCOUNT_PAGE] my bettings requested'),

  getMyBettingsSuccess: createAction(
    '[ACCOUNT_PAGE] my bettings success',
    props<{ myBettings: IMyBetInterface[] }>()
  ),

  getMyBettingsError: createAction(
    '[ACCOUNT_PAGE] my bettings error',
    props<{ error: HttpErrorResponse }>()
  ),

  getMyOrdersRequest: createAction('[ACCOUNT_PAGE] my orders requested'),

  getMyOrdersSuccess: createAction(
    '[ACCOUNT_PAGE] my orders success',
    props<{ myOrders: IMyOrdersInterface[] }>()
  ),

  getMyOrdersError: createAction(
    '[ACCOUNT_PAGE] my orders error',
    props<{ error: HttpErrorResponse }>()
  ),
};
