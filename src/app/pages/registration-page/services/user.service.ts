import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserApiResponse } from '../../../shared/interfaces/user.interface';
import { IUserCredentials } from '../../../shared/interfaces/user-credentials.interfase';
import { BaseService } from 'src/app/shared/services/base.service';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  constructor(protected override httpClient: HttpClient) {
    super(httpClient);
  }

  public create(
    user: IUserCredentials,
    url: string
  ): Observable<UserApiResponse> {
    return this.post<UserApiResponse>(`auth/${url}`, { user });
  }
}
