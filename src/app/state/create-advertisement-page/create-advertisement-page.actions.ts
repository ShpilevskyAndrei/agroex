import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { IAdvertisementFormCredentials } from '../../pages/create-advertisement-page/interfaces/create-advertisement.interface';

export const CreateAdvertisementPageActions = {
  createAdvertisementRequest: createAction(
    '[CREATE_ADVERTISEMENT_PAGE] advertisement requested',
    props<{ formAdvertisement: IAdvertisementFormCredentials }>()
  ),

  createAdvertisementSuccess: createAction(
    '[CREATE_ADVERTISEMENT_PAGE] advertisement success'
  ),

  createAdvertisementError: createAction(
    '[CREATE_ADVERTISEMENT_PAGE] advertisement error',
    props<{ error: HttpErrorResponse }>()
  ),
};
