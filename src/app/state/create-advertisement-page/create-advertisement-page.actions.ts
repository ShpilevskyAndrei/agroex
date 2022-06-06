import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

export const CreateAdvertisementPageActions = {
  createAdvertisementRequest: createAction(
    '[CREATE_ADVERTISEMENT_PAGE] advertisement requested',
    props<{ formAdvertisement: FormData }>()
  ),

  createAdvertisementSuccess: createAction(
    '[CREATE_ADVERTISEMENT_PAGE] advertisement success'
  ),

  createAdvertisementError: createAction(
    '[CREATE_ADVERTISEMENT_PAGE] advertisement error',
    props<{ error: HttpErrorResponse }>()
  ),

  dropAdvertisementLoadingStatus: createAction(
    '[CREATE_ADVERTISEMENT_PAGE] advertisement drop loading status'
  ),
};
