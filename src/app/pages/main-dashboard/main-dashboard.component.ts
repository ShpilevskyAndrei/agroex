import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import firebase from 'firebase/compat';
import MessagePayload = firebase.messaging.MessagePayload;

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
  @Input() public notificationMessage: MessagePayload[] | null;
  @Input() public advertisementsRequest: IAdvertisementRequestInterface | null;
  @Input() public advertisementsLoadingStatus: LoadingStatus | null;
  @Input() public selectCategoryTabTitle: string | null;

  @Output() public logout: EventEmitter<void> = new EventEmitter<void>();
  @Output() public setBet: EventEmitter<Record<string, string | number>> =
    new EventEmitter<Record<string, string | number>>();
  @Output() public setBuy: EventEmitter<Record<string, string>> =
    new EventEmitter<Record<string, string>>();
  @Output() public selectTab: EventEmitter<string> =
    new EventEmitter<string>();
  @Output() public addNotificationMessage: EventEmitter<MessagePayload> =
    new EventEmitter<MessagePayload>();
  @Output() public selectCategoryTab: EventEmitter<string> =
    new EventEmitter<string>();
  @Output() public changeNotificationStatus: EventEmitter<MessagePayload> =
    new EventEmitter<MessagePayload>();

  public showOwnerFlag = true;

  public isNavigationToAdvertisementPage = true;

  public onLogout(): void {
    this.logout.emit();
  }

  public onSetBet(newBetOptions: Record<string, string | number>): void {
    this.setBet.emit(newBetOptions);
  }

  public onSetBuy(buyOptions: Record<string, string>): void {
    this.setBuy.emit(buyOptions);
  }

  public onSelectTab(selectedOptionId: string): void {
    this.selectTab.emit(selectedOptionId);
  }

  public onAddNotificationMessage(message: MessagePayload): void {
    this.addNotificationMessage.emit(message);
  }

  public onSelectCategoryTab(selectedOptionId: string): void {
    this.selectCategoryTab.emit(selectedOptionId);
  }

  public onClickNotification(notification: MessagePayload): void {
    this.changeNotificationStatus.emit(notification);
  }
}
