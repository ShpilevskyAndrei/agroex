import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { CategoriesService } from '../../../categories/categories.service';
import {
  ERROR_ACTION,
  REQUESTED_ACTION,
  SUCCESS_ACTION,
} from './categories.actions';

@Injectable()
export class CategoriesEffects {
  public categories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(REQUESTED_ACTION),
      switchMap(() => this.categoriesService.getCategories()),
      map((categories) => SUCCESS_ACTION({ categories: categories })),
      catchError((error: string) => of(ERROR_ACTION({ error })))
    );
  });

  constructor(
    private actions$: Actions,
    private categoriesService: CategoriesService
  ) {}
}
