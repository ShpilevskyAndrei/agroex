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
import { UserRole } from '../../shared/components/header/enums/user-role';
import { IAdRequestInterface } from '../../shared/components/advertisements-list/interfaces/ad-request.interface';

@Component({
  selector: 'app-advertisement-page',
  templateUrl: './advertisement-page.component.html',
  styleUrls: ['./advertisement-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvertisementPageComponent {
  @Input() public user: IUser | null;
  @Input() public advertisement: IAdRequestInterface | null;
  @Input() public slug: string | null;
  @Input() public advertisementLoadingStatus: LoadingStatus | null;
  @Input() public userRole: UserRole | null;
  @Input() public notificationMessage: MessagePayload[] | null;
  @Input() public map: GeoJSON.FeatureCollection<GeoJSON.MultiPolygon> | null;

  @Output() public logout: EventEmitter<void> = new EventEmitter<void>();
  @Output() public selectTab: EventEmitter<string> = new EventEmitter<string>();
  @Output() public setBet: EventEmitter<Record<string, string | number>> =
    new EventEmitter<Record<string, string | number>>();
  @Output() public addNotificationMessage: EventEmitter<MessagePayload> =
    new EventEmitter<MessagePayload>();
  @Output() public setBuy: EventEmitter<Record<string, string>> =
    new EventEmitter<Record<string, string>>();
  @Output() public changeNotificationStatus: EventEmitter<MessagePayload> =
    new EventEmitter<MessagePayload>();

  public onSetBet(newBetOptions: Record<string, string | number>): void {
    this.setBet.emit(newBetOptions);
  }

  public onSetBuy(buyOptions: Record<string, string>): void {
    this.setBuy.emit(buyOptions);
  }

  public onLogout(): void {
    this.logout.emit();
  }

  public onSelectTab(selectedOptionId: string): void {
    this.selectTab.emit(selectedOptionId);
  }

  public onAddNotificationMessage(message: MessagePayload): void {
    this.addNotificationMessage.emit(message);
  }

  public onClickNotification(notification: MessagePayload): void {
    this.changeNotificationStatus.emit(notification);
  }
}
