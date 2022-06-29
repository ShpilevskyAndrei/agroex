import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

import { IAdvertisementRequestInterface } from '../../../shared/components/advertisements-list/interfaces/advertisement-request.interface';
import { LoadingStatus } from '../../../shared/interfaces/loading-status';
import { IUser } from '../../../shared/interfaces/user.interface';
import { AccountPageActions } from '../../../state/account-page/account-page.actions';
import { UserRole } from '../../../shared/components/header/enums/user-role';
import { IAdvertisementInterface } from '../../../shared/components/advertisements-list/interfaces/advertisement.interface';
import { MY_ADVERTISEMENTS_TABS } from './constants/my-advertisements-tab-options';

@Component({
  selector: 'app-my-advertisements',
  templateUrl: './my-advertisements.component.html',
  styleUrls: ['./my-advertisements.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyAdvertisementsComponent implements OnInit {
  @Input()
  public myAdvertisementsRequest: IAdvertisementRequestInterface | null;
  @Input() public myAdvertisementsLoadingStatus: LoadingStatus | null;
  @Input() public user: IUser | null;
  @Input() public userRole: UserRole | null;
  @Input() public myAdvertisementsTabs = MY_ADVERTISEMENTS_TABS;
  @Input() public selectMyAdvertisementTabTitle: string | null;

  @Output() public dispatcher: EventEmitter<Function> =
    new EventEmitter<Function>();
  @Output() public confirmDeal: EventEmitter<IAdvertisementInterface> =
    new EventEmitter<IAdvertisementInterface>();
  @Output() public selectMyAdvertisementsTab: EventEmitter<string> =
    new EventEmitter<string>();

  public ngOnInit(): void {
    this.dispatcher.emit(AccountPageActions.getMyAdvertisementsRequest);
  }

  public onConfirmDeal(advertisement: IAdvertisementInterface): void {
    this.confirmDeal.emit(advertisement);
  }

  public onSelectMyAdvertisementTab(tabChangeEvent: MatTabChangeEvent): void {
    this.selectMyAdvertisementsTab.emit(
      this.myAdvertisementsTabs?.[tabChangeEvent.index]
    );
  }

  public findMyAdvertisementTabTitle(): number {
    if (!this.myAdvertisementsTabs || !this.selectMyAdvertisementTabTitle) {
      return 0;
    }

    return this.myAdvertisementsTabs.findIndex((tab: string) => {
      return tab === this.selectMyAdvertisementTabTitle;
    });
  }
}
