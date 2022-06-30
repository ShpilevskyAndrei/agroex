import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

import { IAdvertisementRequestInterface } from '../../shared/components/advertisements-list/interfaces/advertisement-request.interface';
import { IMyOrdersInterface } from '../../pages/account-page/my-orders/interfaces/my-orders-request.interface';
import { IAdvertisementInterface } from '../../shared/components/advertisements-list/interfaces/advertisement.interface';
import { IUser } from "../../shared/interfaces/user.interface";

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
    props<{ advertisement: IAdvertisementInterface }>()
  ),

  getConfirmDealSuccess: createAction('[ACCOUNT_PAGE] confirm deal success'),

  getConfirmDealError: createAction(
    '[ACCOUNT_PAGE] confirm deal error',
    props<{ error: HttpErrorResponse }>()
  ),

  getMyBettingsRequest: createAction('[ACCOUNT_PAGE] my bettings requested'),

  getMyBettingsSuccess: createAction(
    '[ACCOUNT_PAGE] my bettings success',
    props<{
      selectUserData: IUser | null;
      myBettings: IAdvertisementRequestInterface;
      myBettingTab: string;
    }>()
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
  getMyAdvertisementTabRequest: createAction(
    '[ACCOUNT_PAGE] my advertisement tab requested',
    props<{ selectedMyAdvertisementOptionTab: string }>()
  ),
  getMyBettingTabRequest: createAction(
    '[ACCOUNT_PAGE] my betting tab requested',
    props<{ selectedMyBettingOptionTab: string }>()
  ),
};
