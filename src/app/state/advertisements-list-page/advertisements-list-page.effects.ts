import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, withLatestFrom } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AgroexToastService, ToastType } from 'ngx-agroex-toast';

import {
  AdvertisementsListBetActions,
  AdvertisementsListPageActions,
} from './advertisements-list-page.actions';
import { IAdvertisementRequestInterface } from '../../advertisements-list/interfaces/advertisement-request.interface';
import { AdvertisementsListService } from '../../advertisements-list/advertisements-list.service';
import { selectUserToken } from '../registration-page/registration-page.selectors';

@Injectable()
export class AdvertisementsListPageEffects {
  public advertisements$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        AdvertisementsListPageActions.getAdvertisementsRequest,
        AdvertisementsListBetActions.getAdvertisementsBetSuccess,
        AdvertisementsListBetActions.getAdvertisementsBetError
      ),
      switchMap(() =>
        this.advertisementsListService.getAdvertisements().pipe(
          map((advertisements: IAdvertisementRequestInterface) =>
            AdvertisementsListPageActions.getAdvertisementsSuccess({
              advertisements,
            })
          ),
          catchError((error: HttpErrorResponse) =>
            of(
              AdvertisementsListPageActions.getAdvertisementsError({
                error: error,
              })
            )
          )
        )
      )
    );
  });

  public advertisementsBet$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AdvertisementsListBetActions.getAdvertisementsBetRequest),
      withLatestFrom(this.store.select(selectUserToken)),
      switchMap(([{ newBetOptions }, selectUserToken]) =>
        this.advertisementsListService
          .addAdvertisementBet(
            newBetOptions.slug,
            newBetOptions.newBet,
            selectUserToken
          )
          .pipe(
            map(() => {
              this.toastService.addToast({
                toastType: ToastType.Success,
                title: 'Bet accepted',
                width: '25vw',
                buttonText: 'Ok',
              });

              return AdvertisementsListBetActions.getAdvertisementsBetSuccess();
            }),
            catchError((error: HttpErrorResponse) => {
              this.toastService.addToast({
                title: 'Bet not accepted',
                message: error.error.message,
                toastType: ToastType.Error,
                width: '25vw',
              });

              return of(
                AdvertisementsListBetActions.getAdvertisementsBetError({
                  error: error,
                })
              );
            })
          )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private store: Store,
    private advertisementsListService: AdvertisementsListService,
    private toastService: AgroexToastService
  ) {}
}
