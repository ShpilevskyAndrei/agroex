import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, concatLatestFrom } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AgroexToastService, ToastType } from 'ngx-agroex-toast';
import { catchError, map, of, switchMap } from 'rxjs';

import { AccountPageService } from '../../pages/account-page/services/account-page.service';
import { IAdvertisementRequestInterface } from '../../shared/components/advertisements-list/interfaces/advertisement-request.interface';
import {
  selectUserData,
  selectUserToken,
} from '../registration-page/registration-page.selectors';
import { AccountPageActions } from './account-page.actions';
import { IMyOrdersInterface } from '../../pages/account-page/my-orders/interfaces/my-orders-request.interface';
import { AdvertisementsListDealActions } from '../advertisements-list-page/advertisements-list-page.actions';
import {
  selectMyAdvertisementTab,
  selectMyBettingTab,
} from './account-page.selectors';

@Injectable()
export class AccountPageEffects {
  public myAdvertisements$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        AccountPageActions.getMyAdvertisementsRequest,
        AccountPageActions.getConfirmDealSuccess
      ),
      concatLatestFrom(() => [
        this.store.select(selectUserToken),
        this.store.select(selectMyAdvertisementTab),
      ]),
      switchMap(([_, selectUserToken, myAdvertisementTab]) =>
        this.accountPageService
          .getMyAdvertisements(myAdvertisementTab, selectUserToken)
          .pipe(
            map((myAdvertisements: IAdvertisementRequestInterface) =>
              AccountPageActions.getMyAdvertisementsSuccess({
                myAdvertisements,
              })
            ),
            catchError((error: HttpErrorResponse) =>
              of(
                AccountPageActions.getMyAdvertisementsError({
                  error: error,
                })
              )
            )
          )
      )
    );
  });

  public confirmDeal$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AccountPageActions.getConfirmDealRequest),
      concatLatestFrom(() => this.store.select(selectUserToken)),
      switchMap(([{ advertisement }, selectUserToken]) =>
        this.accountPageService
          .setConfirmDeal(advertisement.slug, selectUserToken)
          .pipe(
            map(() => {
              this.toastService.addToast({
                toastType: ToastType.Success,
                title: `You confirmed the deal with LOT "${advertisement.title}"`,
                width: '60vw',
              });

              return AccountPageActions.getConfirmDealSuccess();
            }),
            catchError((error: HttpErrorResponse) => {
              this.toastService.addToast({
                toastType: ToastType.Error,
                title: `Something went wrong! Please retry!`,
                width: '60vw',
              });

              return of(
                AccountPageActions.getConfirmDealError({
                  error: error,
                })
              );
            })
          )
      )
    );
  });

  public myBettings$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        AccountPageActions.getMyBettingsRequest,
        AdvertisementsListDealActions.getAdvertisementsBetSuccess
      ),
      concatLatestFrom(() => [
        this.store.select(selectUserData),
        this.store.select(selectUserToken),
        this.store.select(selectMyBettingTab),
      ]),
      switchMap(([_, selectUserData, selectUserToken, myBettingTab]) =>
        this.accountPageService
          .getMyBettings(myBettingTab, selectUserToken)
          .pipe(
            map((myBettings: IAdvertisementRequestInterface) =>
              AccountPageActions.getMyBettingsSuccess({
                selectUserData,
                myBettings,
                myBettingTab,
              })
            ),
            catchError((error: HttpErrorResponse) =>
              of(
                AccountPageActions.getMyBettingsError({
                  error: error,
                })
              )
            )
          )
      )
    );
  });

  public myOrders$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AccountPageActions.getMyOrdersRequest),
      concatLatestFrom(() => this.store.select(selectUserToken)),
      switchMap(([_, selectUserToken]) =>
        this.accountPageService.getOrders(selectUserToken).pipe(
          map((myOrders: IMyOrdersInterface[]) =>
            AccountPageActions.getMyOrdersSuccess({
              myOrders,
            })
          ),
          catchError((error: HttpErrorResponse) =>
            of(
              AccountPageActions.getMyOrdersError({
                error: error,
              })
            )
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private store: Store,
    private accountPageService: AccountPageService,
    private toastService: AgroexToastService
  ) {}
}
