import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';

import { BaseService } from '../shared/services/base.service';
import { IAdvertisementRequestInterface } from './interfaces/advertisement-request.interface';
import { UserApiResponse } from '../shared/interfaces/user.interface';
import { catchError, tap } from 'rxjs/operators';
import { AgroexToastService, ToastType } from 'ngx-agroex-toast';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AdvertisementsListService extends BaseService {
  constructor(
    private toastService: AgroexToastService,
    protected override httpClient: HttpClient
  ) {
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
    return this.post<UserApiResponse>(`${slug}/bet`, { betValue }, token).pipe(
      tap(() =>
        this.toastService.addToast({
          title: `Bet accepted`,
          toastType: ToastType.Success,
          width: '40vw',
          buttonText: 'Ok',
        })
      ),
      catchError(() => {
        this.toastService.addToast({
          title: 'Bet not accepted',
          message: 'Refresh the page and try again',
          toastType: ToastType.Error,
          width: '40vw',
        });
        return EMPTY;
      })
    );
  }
}
