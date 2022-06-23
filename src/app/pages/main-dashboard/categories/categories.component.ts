import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { IAdvertisementRequestInterface } from '../../../shared/components/advertisements-list/interfaces/advertisement-request.interface';
import { UserPanelOptionId } from '../../../shared/components/header/enums/user-panel-option-id';

import { LoadingStatus } from '../../../shared/interfaces/loading-status';
import { IUser } from '../../../shared/interfaces/user.interface';
import { Category } from './interfaces/category.model';
import { CategoryItemModel } from './interfaces/categoryItem.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent {
  @Input() public categories: Category[] | null;
  @Input() public categoriesLoadingStatus: LoadingStatus | null;
  @Input() public user: IUser | null;
  @Input() public advertisementsRequest: IAdvertisementRequestInterface | null;
  @Input() public advertisementsLoadingStatus: LoadingStatus | null;

  @Output() public setBet: EventEmitter<Record<string, string | number>> =
    new EventEmitter<Record<string, string | number>>();
  @Output() public selectCategoryTab: EventEmitter<UserPanelOptionId> =
    new EventEmitter<UserPanelOptionId>();

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
  public isNavigationToAdvertisementPage = true;
  public showOwnerFlag = true;

  public getCategoryList(category: Category): CategoryItemModel[] {
    this.activeCategory = category.id;

    return this.categoriesItems.filter(
      (item: CategoryItemModel) => item.categoryId === category.id
    );
  }

  public onSetBet(newBetOptions: Record<string, string | number>): void {
    this.setBet.emit(newBetOptions);
  }
}
