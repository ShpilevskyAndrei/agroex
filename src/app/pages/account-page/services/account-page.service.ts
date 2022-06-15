import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IAdvertisementRequestInterface } from '../../../shared/components/advertisements-list/interfaces/advertisement-request.interface';
import { BaseService } from '../../../shared/services/base.service';

@Injectable()
export class AccountPageService extends BaseService {
  constructor(protected override httpClient: HttpClient) {
    super(httpClient);
  }

  public getMyAdvertisements(
    token?: string
  ): Observable<IAdvertisementRequestInterface> {
    return this.get<IAdvertisementRequestInterface>(
      'advertisements/myAdvertisements/all',
      { token }
    );
  }
}
