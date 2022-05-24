import { Component, EventEmitter, Input, Output } from '@angular/core';

import { LoadingStatus } from '../../shared/interfaces/loading-status';
import { UserFromApi } from '../registration-page/interfaces/user-api-response.interface';
import { Category } from './categories/model/category.model';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss'],
})
export class MainDashboardComponent {
  @Input() public categories: Category[] | null;
  @Input() public categoriesLoadingStatus: LoadingStatus | null;
  @Input() public user: UserFromApi | null;

  @Output() public logout: EventEmitter<void> = new EventEmitter<void>();

  public onLogout(): void {
    this.logout.emit();
  }
}
