import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { BaseService } from '../../services/base.service';
import { IAdvertisementRequestInterface } from './interfaces/advertisement-request.interface';
import { UserApiResponse } from '../../interfaces/user.interface';

@Injectable()
export class AdvertisementsListService extends BaseService {
  constructor(
    protected override httpClient: HttpClient,
    protected override router: Router,
    protected override store: Store
  ) {
    super(httpClient, router, store);
  }

  public getAdvertisements(
    categoryTab: string
  ): Observable<IAdvertisementRequestInterface> {
    return this.get<IAdvertisementRequestInterface>(`advertisements/`, {
      params: { category: categoryTab.split(' ').join('-').toLowerCase() },
    });
  }

  public addAdvertisementBet(
    slug: string | number,
    betValue: string | number,
    token?: string
  ): Observable<UserApiResponse> {
    return this.post<UserApiResponse>(`${slug}/bet`, { betValue }, token);
  }

  public addAdvertisementBuy(
    slug: string | number,
    token?: string
  ): Observable<UserApiResponse> {
    return this.post<UserApiResponse>(`orders/buy/${slug}`, {}, token);
  }
}
