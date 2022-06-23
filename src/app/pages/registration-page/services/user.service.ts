import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { mergeMap, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { UserApiResponse } from '../../../shared/interfaces/user.interface';
import { IUserCredentials } from '../../../shared/interfaces/user-credentials.interfase';
import { BaseService } from 'src/app/shared/services/base.service';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  constructor(
    protected override httpClient: HttpClient,
    protected override router: Router,
    protected override store: Store,
    private afMessaging: AngularFireMessaging
  ) {
    super(httpClient, router, store);
  }

  public create(
    user: IUserCredentials,
    url: string
  ): Observable<UserApiResponse> {
    return this.post<UserApiResponse>(`auth/${url}`, { user });
  }

  public addNotificationToken(
    userToken: string | undefined
  ): Observable<Record<string, string | boolean>> {
    return this.afMessaging.requestToken.pipe(
      mergeMap((token: string | null) => {
        return this.post<Record<string, string | boolean>>(
          'notifications',
          {
            deviceType: 'web',
            token: token,
            isAllowed: true,
          },
          userToken
        );
      })
    );
  }
}
