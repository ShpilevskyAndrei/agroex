import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { IAdvertisementRequestInterface } from '../../../shared/components/advertisements-list/interfaces/advertisement-request.interface';
import {
  IAdvertisementInterface,
  IMyBetInterface,
} from 'src/app/shared/components/advertisements-list/interfaces/advertisement.interface';

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
  public myBettingsRequest: IMyBetInterface[] | null;
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

  public bettingRightRequest(): IAdvertisementInterface[] {
    if (this.myBettingsRequest) {
      const myBettingsNewRequest: IAdvertisementInterface[] = [];
      for (let i = 0; i < this.myBettingsRequest.length; i++) {
        myBettingsNewRequest.push({
          id: this.myBettingsRequest[i].id,
          title: this.myBettingsRequest[i].title,
          country: this.myBettingsRequest[i].country,
          location: this.myBettingsRequest[i].location,
          slug: this.myBettingsRequest[i].slug,
          category: this.myBettingsRequest[i].category,
          subCategory: this.myBettingsRequest[i].subCategory,
          isModerated: this.myBettingsRequest[i].isModerated,
          isActive: this.myBettingsRequest[i].isActive,
          price: this.myBettingsRequest[i].price,
          currency: this.myBettingsRequest[i].currency,
          img: this.myBettingsRequest[i].img,
          quantity: this.myBettingsRequest[i].quantity,
          unit: this.myBettingsRequest[i].unit,
          createAt: this.myBettingsRequest[i].createAt,
          updatedAt: this.myBettingsRequest[i].updatedAt,
          author: {
            id: this.myBettingsRequest[i].authorId,
            email: '',
            username: '',
            phone: '',
            image: '',
            banned: false,
            banReason: '',
          },
          userBets: [
            {
              id: 0,
              user_id:
                this.myBettingsRequest[i].lastBetInfo.user_id_with_last_bet,
              advertisement_id: 0,
              created_at: '',
              expireBet: '',
              betValue: this.myBettingsRequest[i].lastBetInfo.last_bet_value,
              isActive: true,
            },
          ],
        });
      }
      return myBettingsNewRequest;
    } else {
      return [];
    }
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
      advertisements: this.bettingRightRequest(),
    };
  }
}
