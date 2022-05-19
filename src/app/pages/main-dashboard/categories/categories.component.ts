import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Category } from './model/category.model';
import { CategoriesService } from './categories.service';
import { CategoryItemModel } from './model/categoryItem.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent {
  public activeCategory: number;

  public categories$ = this.categoriesService.getCategories();

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

  constructor(private categoriesService: CategoriesService) {}

  public getCategoryList(category: Category): void {
    this.activeCategory = category.id;
    console.log(
      this.categoriesItems.filter((item) => item.categoryId === category.id)
    );
  }
}
