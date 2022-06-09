import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap, withLatestFrom } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';

import { ModerateAdvertisementsListPageActions } from './advertisements-list-page.actions';
import { IAdvertisementRequestInterface } from '../../advertisements-list/interfaces/advertisement-request.interface';
import { ModerationAdvertisementsListService } from '../../moderation-advertisments-list/moderation-advertisements-list.service';
import { selectUserToken } from '../registration-page/registration-page.selectors';
import { EMPTY_ACTION } from 'src/app/shared/constants/empty-action';
import { AgroexToastService, ToastType } from 'ngx-agroex-toast';

@Injectable()
export class ModerationAdvertisementsListPageEffects {
  public nonModerateAdvertisements$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        ModerateAdvertisementsListPageActions.getNonModerateAdvertisementsRequest
      ),
      withLatestFrom(this.store.select(selectUserToken)),
      switchMap(([_, selectUserToken]) =>
        this.moderateAdvertisementsListService
          .getNonModerateAdvertisements(selectUserToken)
          .pipe(
            map((nonModerateAdvertisements: IAdvertisementRequestInterface) =>
              ModerateAdvertisementsListPageActions.getANonModerateAdvertisementsSuccess(
                {
                  nonModerateAdvertisements,
                }
              )
            ),
            catchError((error: HttpErrorResponse) =>
              of(
                ModerateAdvertisementsListPageActions.getNonModerateAdvertisementsError(
                  {
                    error: error,
                  }
                )
              )
            )
          )
      )
    );
  });

  public decisionNonModerateAdvertisements$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        ModerateAdvertisementsListPageActions.getDecisionNonModerateAdvertisements
      ),
      withLatestFrom(this.store.select(selectUserToken)),
      switchMap(([{ decision }, selectUserToken]) =>
        this.moderateAdvertisementsListService
          .decisionNonModerateAdvertisements(decision, selectUserToken)
          .pipe(
            mergeMap(() => EMPTY_ACTION),
            catchError(() => {
              this.toastService.addToast({
                toastType: ToastType.Error,
                title: `Something went wrong! Please retry!`,
                width: '50vw',
              });

              return EMPTY_ACTION;
            })
          )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private moderateAdvertisementsListService: ModerationAdvertisementsListService,
    private toastService: AgroexToastService,
    private store: Store
  ) {}
}
