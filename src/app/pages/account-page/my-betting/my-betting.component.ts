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
import { MY_BETTING_TABS } from './constants/my-betting-tab-options';

@Component({
  selector: 'app-my-betting',
  templateUrl: './my-betting.component.html',
  styleUrls: ['./my-betting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyBettingComponent implements OnInit {
  @Input()
  public myBettingsRequest: IAdvertisementRequestInterface | null;
  @Input() public myBettingsLoadingStatus: LoadingStatus | null;
  @Input() public user: IUser | null;
  @Input() public selectMyBettingTabTitle: string | null;

  @Output() public dispatcher: EventEmitter<Function> =
    new EventEmitter<Function>();
  @Output() public setBet: EventEmitter<Record<string, string | number>> =
    new EventEmitter<Record<string, string | number>>();
  @Output() public setBuy: EventEmitter<Record<string, string>> =
    new EventEmitter<Record<string, string>>();
  @Output() public selectMyBettingTab: EventEmitter<string> =
    new EventEmitter<string>();

  public showOwnerFlag = true;
  public myBettingTabs = MY_BETTING_TABS;

  public ngOnInit(): void {
    this.dispatcher.emit(AccountPageActions.getMyBettingsRequest);
  }

  public onSetBet(newBetOptions: Record<string, string | number>): void {
    this.setBet.emit(newBetOptions);
  }

  public onSetBuy(buyOptions: Record<string, string>): void {
    this.setBuy.emit(buyOptions);
  }

  public onSelectMyBettingTab(tabChangeEvent: MatTabChangeEvent): void {
    this.selectMyBettingTab.emit(this.myBettingTabs?.[tabChangeEvent.index]);
  }

  public findMyBettingTabTitle(): number {
    if (!this.myBettingTabs || !this.selectMyBettingTabTitle) {
      return 0;
    }

    return this.myBettingTabs.findIndex((tab: string) => {
      return tab === this.selectMyBettingTabTitle;
    });
  }
}
