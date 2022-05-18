import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { CategoriesService } from '../../../categories/categories.service';
import { CategoriesActions } from './categories.actions';

@Injectable()
export class CategoriesEffects {
  public categories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CategoriesActions.REQUESTED_ACTION),
      switchMap(() => this.categoriesService.getCategories()),
      map((categories) =>
        CategoriesActions.SUCCESS_ACTION({ categories: categories })
      ),
      catchError((error) =>
        of(CategoriesActions.ERROR_ACTION({ error: error }))
      )
    );
  });

  constructor(
    private actions$: Actions,
    private categoriesService: CategoriesService
  ) {}
}
