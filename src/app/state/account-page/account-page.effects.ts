import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap } from 'rxjs';

import { AccountPageService } from '../../pages/account-page/services/account-page.service';
import { IAdvertisementRequestInterface } from '../../shared/components/advertisements-list/interfaces/advertisement-request.interface';
import { AccountPageActions } from './account-page.actions';

@Injectable()
export class AccountPageEffects {
  public myAdvertisements$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        AccountPageActions.getMyAdvertisementsRequest,
        AccountPageActions.getMyAdvertisementsSuccess,
        AccountPageActions.getMyAdvertisementsError
      ),
      switchMap(() =>
        this.accountPageService.getMyAdvertisements().pipe(
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

  constructor(
    private actions$: Actions,
    private store: Store,
    private accountPageService: AccountPageService
  ) {}
}
