import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { LoadingStatus } from '../../../shared/interfaces/loading-status';
import { Category } from './model/category.model';
import { CategoryItemModel } from './model/categoryItem.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent {
  @Input() public categories: Category[] | null;
  @Input() public categoriesLoadingStatus: LoadingStatus | null;

  public activeCategory: number;

  public categoriesItems: CategoryItemModel[] = [
    {
      categoryId: 1,
      id: 0,
      title: 'potato',
    },

    {
      categoryId: 1,
      id: 1,
      title: 'cabbage',
    },
    {
      categoryId: 1,
      id: 2,
      title: 'tomato',
    },
    {
      categoryId: 1,
      id: 3,
      title: 'cucumber',
    },
    {
      categoryId: 1,
      id: 4,
      title: 'onions',
    },
    {
      categoryId: 1,
      id: 5,
      title: 'parsley',
    },
    {
      categoryId: 2,
      id: 0,
      title: 'apricots',
    },
    {
      categoryId: 2,
      id: 1,
      title: 'apples',
    },
    {
      categoryId: 2,
      id: 2,
      title: 'cherries',
    },
    {
      categoryId: 2,
      id: 3,
      title: 'persimmon',
    },
    {
      categoryId: 2,
      id: 4,
      title: 'plums',
    },
    {
      categoryId: 2,
      id: 5,
      title: 'peaches',
    },
    {
      categoryId: 2,
      id: 6,
      title: 'lemons',
    },
    {
      categoryId: 2,
      id: 7,
      title: 'watermelons',
    },
    {
      categoryId: 3,
      id: 0,
      title: 'wheat',
    },
    {
      categoryId: 3,
      id: 1,
      title: 'rice',
    },
    {
      categoryId: 3,
      id: 2,
      title: 'corn',
    },
    {
      categoryId: 4,
      id: 0,
      title: 'wallnuts',
    },
    {
      categoryId: 4,
      id: 1,
      title: 'apricots',
    },
    {
      categoryId: 4,
      id: 2,
      title: 'almonds',
    },
  ];

  public getCategoryList(category: Category): void {
    this.activeCategory = category.id;
    console.log(
      this.categoriesItems.filter((item) => item.categoryId === category.id)
    );
  }
}
