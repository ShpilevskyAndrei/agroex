import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BaseService } from '../../services/base.service';
import { IAdvertisementRequestInterface } from './interfaces/advertisement-request.interface';
import { UserApiResponse } from '../../interfaces/user.interface';

@Injectable()
export class AdvertisementsListService extends BaseService {
  constructor(protected override httpClient: HttpClient) {
    super(httpClient);
  }

  public getAdvertisements(): Observable<IAdvertisementRequestInterface> {
    return this.get<IAdvertisementRequestInterface>('advertisements');
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
    emptyObject: object,
    token?: string
  ): Observable<UserApiResponse> {
    return this.post<UserApiResponse>(`orders/buy/${slug}`, {}, token);
  }
}
