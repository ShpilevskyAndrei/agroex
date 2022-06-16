import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { IAdvertisementRequestInterface } from '../../shared/components/advertisements-list/interfaces/advertisement-request.interface';

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
};
