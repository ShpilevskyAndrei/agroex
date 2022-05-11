import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Category } from './model/category.model';
import { CategoryItemModel } from './model/categoryItem.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent {
  public activeCategory = 0;

  public categories: Category[] = [
    {
      id: 0,
      title: 'Vegetables',
      icon: 'https://agro-market24.eu/bundles/systemextmain/img/warzywa-white-ico.png?121',
    },
    {
      id: 1,
      title: 'Fruits',
      icon: 'https://agro-market24.eu/bundles/systemextmain/img/owoce-white-ico.png?121',
    },
    {
      id: 2,
      title: 'Crops',
      icon: 'https://agro-market24.eu/bundles/systemextmain/img/ziemniaki-white-ico.png?121',
    },
    {
      id: 3,
      title: 'Dry fruits',
      icon: 'https://agro-market24.eu/bundles/systemextmain/img/zbo-a-white-ico.png?121',
    },
  ];

  public categoriesItems: CategoryItemModel[] = [
    {
      categoryId: 0,
      id: 0,
      title: 'potato',
    },
    {
      categoryId: 0,
      id: 1,
      title: 'cabbage',
    },
    {
      categoryId: 0,
      id: 2,
      title: 'tomato',
    },
    {
      categoryId: 0,
      id: 3,
      title: 'cucumber',
    },
    {
      categoryId: 0,
      id: 4,
      title: 'onions',
    },
    {
      categoryId: 0,
      id: 5,
      title: 'parsley',
    },
    {
      categoryId: 1,
      id: 0,
      title: 'apricots',
    },
    {
      categoryId: 1,
      id: 1,
      title: 'apples',
    },
    {
      categoryId: 1,
      id: 2,
      title: 'cherries',
    },
    {
      categoryId: 1,
      id: 3,
      title: 'persimmon',
    },
    {
      categoryId: 1,
      id: 4,
      title: 'plums',
    },
    {
      categoryId: 1,
      id: 5,
      title: 'peaches',
    },
    {
      categoryId: 1,
      id: 6,
      title: 'lemons',
    },
    {
      categoryId: 1,
      id: 7,
      title: 'watermelons',
    },
    {
      categoryId: 2,
      id: 0,
      title: 'wheat',
    },
    {
      categoryId: 2,
      id: 1,
      title: 'rice',
    },
    {
      categoryId: 2,
      id: 2,
      title: 'corn',
    },
    {
      categoryId: 3,
      id: 0,
      title: 'wallnuts',
    },
    {
      categoryId: 3,
      id: 1,
      title: 'apricots',
    },
    {
      categoryId: 3,
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
