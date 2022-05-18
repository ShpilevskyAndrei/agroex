import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadingStatus } from '../shared/header/interfaces/loading-status';
import { REQUESTED_ACTION } from '../state/categories/categories-store/categories.actions';
import {
  selectCategoriesData,
  selectCategoriesLoadingStatus,
} from '../state/categories/categories-store/categories.selectors';
import { Category } from './model/category.model';

@Component({
  selector: 'app-categories-container',
  template: ` <app-categories
    [categories]="categories$ | async"
    [categoriesLoadingStatus]="categoriesLoadingStatus$ | async"
  ></app-categories>`,
})
export class CategoriesContainerComponent implements OnInit {
  public categories$: Observable<Category[] | null>;
  public categoriesLoadingStatus$: Observable<LoadingStatus | null>;

  constructor(private store: Store) {
    this.categories$ = this.store.select(selectCategoriesData);
    this.categoriesLoadingStatus$ = this.store.select(
      selectCategoriesLoadingStatus
    );
  }

  public ngOnInit(): void {
    this.store.dispatch(REQUESTED_ACTION());
  }
}
