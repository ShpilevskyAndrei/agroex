import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { CategoriesService } from '../../categories/categories.service';
import { Category } from '../../categories/model/category.model';
import { CategoriesActions } from './main-dashboard.actions';

@Injectable()
export class MainDashboardEffects {
  public categories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CategoriesActions.getCategoriesRequest),
      switchMap(() => this.categoriesService.getCategories()),
      map((categories: Category[]) =>
        CategoriesActions.getCategoriesSuccess({ categories })
      ),
      catchError((error) =>
        of(CategoriesActions.getCategoriesError({ error: error }))
      )
    );
  });

  constructor(
    private actions$: Actions,
    private categoriesService: CategoriesService
  ) {}
}
