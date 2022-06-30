import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';

import { IAdvertisementRequestInterface } from '../../../shared/components/advertisements-list/interfaces/advertisement-request.interface';
import { BaseService } from '../../../shared/services/base.service';
import { IMyOrdersInterface } from '../my-orders/interfaces/my-orders-request.interface';
import {
  IMyBetInterface,
  IMyBettingsRequestMap,
} from '../../../shared/components/advertisements-list/interfaces/advertisement.interface';

@Injectable({
  providedIn: 'root',
})
export class AccountPageService extends BaseService {
  constructor(
    protected override httpClient: HttpClient,
    protected override router: Router,
    protected override store: Store
  ) {
    super(httpClient, router, store);
  }

  public getMyAdvertisements(
    myAdvertisementTab: string,
    token?: string
  ): Observable<IAdvertisementRequestInterface> {
    return this.get<IAdvertisementRequestInterface>(
      `advertisements/my-advertisements`,
      {
        params: { type: myAdvertisementTab.toLowerCase() },
        token,
      }
    );
  }

  public getMyBettings(
    myBettingTab: string,
    token?: string
  ): Observable<IAdvertisementRequestInterface> {
    return this.get<IMyBetInterface[]>('advertisements/my-bets', {
      params: { type: myBettingTab.toLowerCase() },
      token,
    }).pipe(
      map((myBettingsRequest: IMyBetInterface[]) => {
        const myBettingsRequestMap: IMyBettingsRequestMap[] =
          myBettingsRequest.map((value: IMyBetInterface) => {
            return {
              ...value,
              author: {
                id: value.authorId,
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
                  user_id: value.lastBetInfo?.user_id_with_last_bet,
                  advertisement_id: 0,
                  created_at: '',
                  expireBet: '',
                  betValue: value.lastBetInfo?.last_bet_value,
                  isActive: true,
                },
              ],
            };
          });
        return {
          advertisementCount: myBettingsRequest.length,
          advertisements: myBettingsRequestMap,
        };
      })
    );
  }

  public getOrders(token?: string): Observable<IMyOrdersInterface[]> {
    return this.get<IMyOrdersInterface[]>('orders', { token });
  }

  public setConfirmDeal(
    slug: string,
    token?: string
  ): Observable<IAdvertisementRequestInterface> {
    return this.post<IAdvertisementRequestInterface>(
      `orders/confirm/${slug}`,
      {},
      token
    );
  }
}
