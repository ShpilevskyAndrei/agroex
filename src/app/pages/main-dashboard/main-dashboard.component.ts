import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { UserPanelOptionId } from '../../shared/components/header/enums/user-panel-option-id';
import { LoadingStatus } from '../../shared/interfaces/loading-status';
import { IUser } from '../../shared/interfaces/user.interface';
import { Category } from './categories/interfaces/category.model';
import { IAdvertisementRequestInterface } from '../../shared/components/advertisements-list/interfaces/advertisement-request.interface';
import { UserRole } from '../../shared/components/header/enums/user-role';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainDashboardComponent {
  @Input() public categories: Category[] | null;
  @Input() public categoriesLoadingStatus: LoadingStatus | null;
  @Input() public user: IUser | null;
  @Input() public userRole: UserRole | null;
  @Input() public advertisementsRequest: IAdvertisementRequestInterface | null;
  @Input() public advertisementsLoadingStatus: LoadingStatus | null;

  @Output() public logout: EventEmitter<void> = new EventEmitter<void>();
  @Output() public setBet: EventEmitter<Record<string, string | number>> =
    new EventEmitter<Record<string, string | number>>();
  @Output() public selectTab: EventEmitter<UserPanelOptionId> =
    new EventEmitter<UserPanelOptionId>();
  @Output() public isAddFlag = true;

  public isNavigationToAdvertisementPage = true;

  public onLogout(): void {
    this.logout.emit();
  }

  public onSetBet(newBetOptions: Record<string, string | number>): void {
    this.setBet.emit(newBetOptions);
  }

  public onSelectTab(selectedOptionId: UserPanelOptionId): void {
    this.selectTab.emit(selectedOptionId);
  }
}
