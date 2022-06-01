import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { BaseService } from '../../../shared/services/base.service';
import { UserApiResponse } from '../../registration-page/interfaces/user-api-response.interface';
import { UserCredentials } from '../../registration-page/interfaces/user.interfase';

@Injectable({
  providedIn: 'root',
})
export class CreateAdvertisementService extends BaseService {
  constructor(protected override httpClient: HttpClient) {
    super(httpClient);
  }

  public create(
    formAdvertisement: UserCredentials
  ): Observable<UserApiResponse> {
    return this.post<UserApiResponse>(`advertisements`, {
      formAdvertisement,
    }).pipe(
      catchError((e) => {
        return throwError(() => e);
      })
    );
  }
}
