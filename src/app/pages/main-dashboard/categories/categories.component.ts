import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { NgxSpinnerService } from 'ngx-spinner';

import { IAdvertisementRequestInterface } from '../../../shared/components/advertisements-list/interfaces/advertisement-request.interface';
import { LoadingStatus } from '../../../shared/interfaces/loading-status';
import { IUser } from '../../../shared/interfaces/user.interface';
import { Category } from './interfaces/category.model';

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
  @Input() public selectCategoryTabTitle: string | null;

  @Output() public setBet: EventEmitter<Record<string, string | number>> =
    new EventEmitter<Record<string, string | number>>();
  @Output() public setBuy: EventEmitter<Record<string, string>> =
    new EventEmitter<Record<string, string>>();
  @Output() public selectCategoryTab: EventEmitter<string> =
    new EventEmitter<string>();

  public activeCategory: number;

  public isNavigationToAdvertisementPage = true;
  public showOwnerFlag = true;

  constructor(private spinner: NgxSpinnerService) {}

  public onSetBet(newBetOptions: Record<string, string | number>): void {
    this.setBet.emit(newBetOptions);
  }

  public onSetBuy(buyOptions: Record<string, string>): void {
    this.setBuy.emit(buyOptions);
  }

  public onSelectCategoryTab(tabChangeEvent: MatTabChangeEvent): void {
    this.spinner.show();
    this.selectCategoryTab.emit(this.categories?.[tabChangeEvent.index]?.title);
  }

  public findCategory(): number {
    if (!this.categories || !this.selectCategoryTabTitle) {
      return 0;
    }

    return this.categories.findIndex(
      (category: Category) => category.title === this.selectCategoryTabTitle
    );
  }
}
