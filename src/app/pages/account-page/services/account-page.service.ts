import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IAdvertisementRequestInterface } from '../../../shared/components/advertisements-list/interfaces/advertisement-request.interface';
import { BaseService } from '../../../shared/services/base.service';
import { IMyOrdersInterface } from '../my-orders/interfaces/my-orders-request.interface';

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
      'advertisements/myAdvertisements/all',
      { token }
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
