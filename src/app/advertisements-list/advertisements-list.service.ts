import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BaseService } from '../shared/services/base.service';
import { IAdvertisementRequestInterface } from './interfaces/advertisement-request.interface';
import { UserApiResponse } from '../shared/interfaces/user.interface';

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
}
