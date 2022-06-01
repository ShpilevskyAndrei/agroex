import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { CategoriesService } from '../../pages/main-dashboard/categories/categories.service';
import { Category } from '../../pages/main-dashboard/categories/interfaces/category.model';
import { MainDashboardActions } from './main-dashboard.actions';

@Injectable()
export class MainDashboardEffects {
  public categories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MainDashboardActions.getCategoriesRequest),
      switchMap(() =>
        this.categoriesService.getCategories().pipe(
          map((categories: Category[]) =>
            MainDashboardActions.getCategoriesSuccess({ categories })
          ),
          catchError((error: HttpErrorResponse) =>
            of(MainDashboardActions.getCategoriesError({ error: error }))
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private categoriesService: CategoriesService
  ) {}
}
