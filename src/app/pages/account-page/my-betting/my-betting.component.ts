import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { IAdvertisementRequestInterface } from '../../../shared/components/advertisements-list/interfaces/advertisement-request.interface';
import { IAdvertisementInterface } from 'src/app/shared/components/advertisements-list/interfaces/advertisement.interface';

import { LoadingStatus } from '../../../shared/interfaces/loading-status';
import { IUser } from '../../../shared/interfaces/user.interface';
import { AccountPageActions } from '../../../state/account-page/account-page.actions';

@Component({
  selector: 'app-my-betting',
  templateUrl: './my-betting.component.html',
  styleUrls: ['./my-betting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyBettingComponent implements OnInit {
  @Input()
  public myBettingsRequest: IAdvertisementInterface[] | null;
  @Input() public myBettingsLoadingStatus: LoadingStatus | null;
  @Input() public user: IUser | null;

  @Output() public dispatcher: EventEmitter<Function> =
    new EventEmitter<Function>();
  @Output() public setBet: EventEmitter<Record<string, string | number>> =
    new EventEmitter<Record<string, string | number>>();
  @Output() public setBuy: EventEmitter<Record<string, string>> =
    new EventEmitter<Record<string, string>>();

  public showOwnerFlag = true;

  public ngOnInit(): void {
    this.dispatcher.emit(AccountPageActions.getMyBettingsRequest);
  }

  public onSetBet(newBetOptions: Record<string, string | number>): void {
    this.setBet.emit(newBetOptions);
  }

  public onSetBuy(buyOptions: Record<string, string>): void {
    this.setBuy.emit(buyOptions);
  }

  public bettingRequest(): IAdvertisementRequestInterface {
    return {
      advertisementCount: this.myBettingsRequest?.length || 0,
      advertisements: this.myBettingsRequest,
    };
  }
}
