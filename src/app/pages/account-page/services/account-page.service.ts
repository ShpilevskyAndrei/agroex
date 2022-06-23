import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';

import { IAdvertisementRequestInterface } from '../../../shared/components/advertisements-list/interfaces/advertisement-request.interface';
import { BaseService } from '../../../shared/services/base.service';
import { IMyOrdersInterface } from '../my-orders/interfaces/my-orders-request.interface';
import { IMyBetInterface } from '../../../shared/components/advertisements-list/interfaces/advertisement.interface';

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
    token?: string
  ): Observable<IAdvertisementRequestInterface> {
    return this.get<IAdvertisementRequestInterface>(
      'advertisements/my-advertisements',
      { token }
    );
  }

  public getMyBettings(
    token?: string
  ): Observable<IAdvertisementRequestInterface> {
    return this.get<IMyBetInterface[]>('advertisements/my-bets', {
      token,
    }).pipe(
      map((myBettingsRequest: IMyBetInterface[]) => {
        const myBettingsNewRequest: IAdvertisementRequestInterface = {
          advertisementCount: myBettingsRequest.length,
          advertisements: [],
        };
        for (let i = 0; i < myBettingsRequest.length; i++) {
          myBettingsNewRequest.advertisements?.push({
            id: myBettingsRequest[i].id,
            title: myBettingsRequest[i].title,
            country: myBettingsRequest[i].country,
            location: myBettingsRequest[i].location,
            slug: myBettingsRequest[i].slug,
            category: myBettingsRequest[i].category,
            subCategory: myBettingsRequest[i].subCategory,
            isModerated: myBettingsRequest[i].isModerated,
            isActive: myBettingsRequest[i].isActive,
            price: myBettingsRequest[i].price,
            currency: myBettingsRequest[i].currency,
            img: myBettingsRequest[i].img,
            quantity: myBettingsRequest[i].quantity,
            unit: myBettingsRequest[i].unit,
            createAt: myBettingsRequest[i].createAt,
            updatedAt: myBettingsRequest[i].updatedAt,
            author: {
              id: myBettingsRequest[i].authorId,
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
                user_id: myBettingsRequest[i].lastBetInfo.user_id_with_last_bet,
                advertisement_id: 0,
                created_at: '',
                expireBet: '',
                betValue: myBettingsRequest[i].lastBetInfo.last_bet_value,
                isActive: true,
              },
            ],
          });
        }
        return myBettingsNewRequest;
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
