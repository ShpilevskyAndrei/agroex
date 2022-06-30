import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { BaseService } from './shared/services/base.service';

@Injectable({
  providedIn: 'root',
})
export class AppService extends BaseService {
  constructor(
    protected override httpClient: HttpClient,
    protected override router: Router,
    protected override store: Store
  ) {
    super(httpClient, router, store);
  }

  public addNotificationToken(
    userToken: string | undefined,
    notificationToken: string | null
  ): Observable<Record<string, string | boolean>> {
    return this.post<Record<string, string | boolean>>(
      'notifications',
      {
        deviceType: 'web',
        token: notificationToken,
        isAllowed: true,
      },
      userToken
    );
  }
}
