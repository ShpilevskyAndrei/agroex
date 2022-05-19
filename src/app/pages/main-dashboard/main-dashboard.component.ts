import { Component, Input } from '@angular/core';
import { LoadingStatus } from '../../shared/interfaces/loading-status';
import { Category } from './categories/model/category.model';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss'],
})
export class MainDashboardComponent {
  @Input() public categories: Category[] | null;
  @Input() public categoriesLoadingStatus: LoadingStatus | null;
}
