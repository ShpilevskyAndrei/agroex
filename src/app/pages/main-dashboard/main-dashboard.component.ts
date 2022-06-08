import { Component, EventEmitter, Input, Output } from '@angular/core';

import { LoadingStatus } from '../../shared/interfaces/loading-status';
import { IUser } from '../../shared/interfaces/user.interface';
import { Category } from './categories/interfaces/category.model';
import { IAdvertisementRequestInterface } from '../../advertisements-list/interfaces/advertisement-request.interface';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss'],
})
export class MainDashboardComponent {
  @Input() public categories: Category[] | null;
  @Input() public categoriesLoadingStatus: LoadingStatus | null;
  @Input() public user: IUser | null;
  @Input() public advertisementsRequest: IAdvertisementRequestInterface | null;
  @Input() public advertisementsLoadingStatus: LoadingStatus | null;

  @Output() public logout: EventEmitter<void> = new EventEmitter<void>();

  @Output() public setBet: EventEmitter<string> = new EventEmitter<string>();

  public onLogout(): void {
    this.logout.emit();
  }

  public onSetBet(bet: string): void {
    console.log(bet);
    this.setBet.emit(bet);
  }
}
