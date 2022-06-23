import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, concatLatestFrom } from '@ngrx/effects';
import { catchError, concatMap, map, of, switchMap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AgroexToastService, ToastType } from 'ngx-agroex-toast';

import {
  AdvertisementsListDealActions,
  AdvertisementsListPageActions,
} from './advertisements-list-page.actions';
import { IAdvertisementRequestInterface } from '../../shared/components/advertisements-list/interfaces/advertisement-request.interface';
import { AdvertisementsListService } from '../../shared/components/advertisements-list/advertisements-list.service';
import { selectUserToken } from '../registration-page/registration-page.selectors';
import { AdvertisementPageActions } from '../advertisement-page/advertisement-page.actions';
import { AccountPageActions } from '../account-page/account-page.actions';
import { selectCategoryTab } from './advertisements-list-page.selectors';

@Injectable()
export class AdvertisementsListPageEffects {
  public advertisements$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        AdvertisementsListPageActions.getAdvertisementsRequest,
        AdvertisementsListDealActions.getAdvertisementsBetSuccess,
        AdvertisementsListDealActions.getAdvertisementsBetError
      ),
      concatLatestFrom(() => this.store.select(selectCategoryTab)),
      switchMap(([_, categoryTab]) => {
        return this.advertisementsListService
          .getAdvertisements(categoryTab)
          .pipe(
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
          );
      })
    );
  });

  public advertisementsBet$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AdvertisementsListDealActions.getAdvertisementsBetRequest),
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
                title: `You betted on LOT "${newBetOptions.title}"`,
                width: '60vw',
                buttonText: 'Ok',
              });

              return [
                AdvertisementsListDealActions.getAdvertisementsBetSuccess(),
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
                AdvertisementsListDealActions.getAdvertisementsBetError({
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

  public advertisementsBuy$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AdvertisementsListDealActions.getAdvertisementsBuyRequest),
      concatLatestFrom(() => this.store.select(selectUserToken)),
      switchMap(([{ buyOptions }, selectUserToken]) =>
        this.advertisementsListService
          .addAdvertisementBuy(buyOptions.slug, selectUserToken)
          .pipe(
            concatMap(() => {
              this.toastService.addToast({
                toastType: ToastType.Success,
                title: `You bought LOT "${buyOptions.title}" at original price`,
                width: '60vw',
                buttonText: 'Ok',
              });

              return [
                AdvertisementsListDealActions.getAdvertisementsBuySuccess(),
                AdvertisementsListPageActions.getAdvertisementsRequest(),
                AccountPageActions.getMyBettingsRequest(),
              ];
            }),
            catchError((error: HttpErrorResponse) => {
              this.toastService.addToast({
                title: 'Purchase not accepted',
                message: error.error.message,
                toastType: ToastType.Error,
                width: '60vw',
              });

              return of(
                AdvertisementsListDealActions.getAdvertisementsBuyError({
                  error: error,
                }),
                AdvertisementPageActions.getAdvertisementRequest({
                  slug: `${buyOptions.slug}`,
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
