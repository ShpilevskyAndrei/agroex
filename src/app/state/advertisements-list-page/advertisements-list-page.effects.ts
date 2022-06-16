import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, concatLatestFrom } from '@ngrx/effects';
import { catchError, concatMap, map, of, switchMap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AgroexToastService, ToastType } from 'ngx-agroex-toast';

import {
  AdvertisementsListBetActions,
  AdvertisementsListPageActions,
} from './advertisements-list-page.actions';
import { IAdvertisementRequestInterface } from '../../shared/components/advertisements-list/interfaces/advertisement-request.interface';
import { AdvertisementsListService } from '../../shared/components/advertisements-list/advertisements-list.service';
import { selectUserToken } from '../registration-page/registration-page.selectors';
import { AdvertisementPageActions } from '../advertisement-page/advertisement-page.actions';

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
      concatLatestFrom(() => this.store.select(selectUserToken)),
      switchMap(([{ newBetOptions }, selectUserToken]) =>
        this.advertisementsListService
          .addAdvertisementBet(
            newBetOptions.slug,
            newBetOptions.newBet,
            selectUserToken
          )
          .pipe(
            concatMap(() => {
              this.toastService.addToast({
                toastType: ToastType.Success,
                title: 'Bet accepted',
                width: '60vw',
                buttonText: 'Ok',
              });

              return [
                AdvertisementsListBetActions.getAdvertisementsBetSuccess(),
                AdvertisementPageActions.getAdvertisementRequest({
                  slug: `${newBetOptions.slug}`,
                  disableReloading: true,
                }),
              ];
            }),
            catchError((error: HttpErrorResponse) => {
              this.toastService.addToast({
                title: 'Bet not accepted',
                message: error.error.message,
                toastType: ToastType.Error,
                width: '60vw',
              });

              return of(
                AdvertisementsListBetActions.getAdvertisementsBetError({
                  error: error,
                }),
                AdvertisementPageActions.getAdvertisementRequest({
                  slug: `${newBetOptions.slug}`,
                  disableReloading: true,
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
