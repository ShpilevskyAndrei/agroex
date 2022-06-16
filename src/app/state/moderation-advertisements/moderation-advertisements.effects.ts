import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, withLatestFrom } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AgroexToastService, ToastType } from 'ngx-agroex-toast';

import { ModerationAdvertisementsActions } from './moderation-advertisements.actions';
import { IAdvertisementRequestInterface } from '../../shared/components/advertisements-list/interfaces/advertisement-request.interface';
import { ModerationAdvertisementsService } from '../../pages/moderation-advertisements/moderation-advertisements.service';
import { selectUserToken } from '../registration-page/registration-page.selectors';

@Injectable()
export class ModerationAdvertisementsEffects {
  public nonModerateAdvertisements$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        ModerationAdvertisementsActions.getNonModerationAdvertisementsRequest
      ),
      withLatestFrom(this.store.select(selectUserToken)),
      switchMap(([_, selectUserToken]) =>
        this.moderateAdvertisementsListService
          .getNonModerateAdvertisements(selectUserToken)
          .pipe(
            map((nonModerateAdvertisements: IAdvertisementRequestInterface) =>
              ModerationAdvertisementsActions.getNonModerationAdvertisementsSuccess(
                {
                  nonModerationAdvertisements: nonModerateAdvertisements,
                }
              )
            ),
            catchError((error: HttpErrorResponse) =>
              of(
                ModerationAdvertisementsActions.getNonModerationAdvertisementsError(
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
        ModerationAdvertisementsActions.getDecisionNonModerationAdvertisementsRequest
      ),
      withLatestFrom(this.store.select(selectUserToken)),
      switchMap(([{ decision }, selectUserToken]) =>
        this.moderateAdvertisementsListService
          .decisionNonModerateAdvertisements(decision, selectUserToken)
          .pipe(
            map(() => {
              this.toastService.addToast({
                toastType: ToastType.Success,
                title: `Advertisement was moderated successfully!`,
                width: '60vw',
              });

              return ModerationAdvertisementsActions.getDecisionNonModerationAdvertisementsSuccess(
                { decision }
              );
            }),
            catchError((error: HttpErrorResponse) => {
              this.toastService.addToast({
                toastType: ToastType.Error,
                title: `Something went wrong! Please retry!`,
                width: '60vw',
              });

              return of(
                ModerationAdvertisementsActions.getDecisionNonModerationAdvertisementsError(
                  {
                    error: error,
                  }
                )
              );
            })
          )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private moderateAdvertisementsListService: ModerationAdvertisementsService,
    private toastService: AgroexToastService,
    private store: Store
  ) {}
}
