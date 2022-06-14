import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, withLatestFrom } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AgroexToastService, ToastType } from 'ngx-agroex-toast';

import { ModerateAdvertisementsListPageActions } from './advertisements-list-page.actions';
import { IAdvertisementRequestInterface } from '../../shared/components/advertisements-list/interfaces/advertisement-request.interface';
import { ModerationAdvertisementsListService } from '../../moderation-advertisements-list/moderation-advertisements-list.service';
import { selectUserToken } from '../registration-page/registration-page.selectors';

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
        ModerateAdvertisementsListPageActions.getDecisionNonModerateAdvertisementsRequest
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
                width: '50vw',
              });

              return ModerateAdvertisementsListPageActions.getDecisionNonModerateAdvertisementsSuccess(
                { decision }
              );
            }),
            catchError((error: HttpErrorResponse) => {
              this.toastService.addToast({
                toastType: ToastType.Error,
                title: `Something went wrong! Please retry!`,
                width: '50vw',
              });

              return of(
                ModerateAdvertisementsListPageActions.getDecisionNonModerateAdvertisementsError(
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
    private moderateAdvertisementsListService: ModerationAdvertisementsListService,
    private toastService: AgroexToastService,
    private store: Store
  ) {}
}
