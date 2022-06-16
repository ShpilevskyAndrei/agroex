import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseService } from '../../shared/services/base.service';
import { IAdvertisementRequestInterface } from './interfaces/advertisement-request.interface';
import { IAdvertisementModerationRequest } from './interfaces/advertisement.interface';

@Injectable({
  providedIn: 'root',
})
export class ModerationAdvertisementsService extends BaseService {
  public getNonModerateAdvertisements(
    token: string | undefined
  ): Observable<IAdvertisementRequestInterface> {
    return this.get<IAdvertisementRequestInterface>(
      'advertisements/moderation/get',
      {
        token,
      }
    );
  }

  public decisionNonModerateAdvertisements(
    advertisement: IAdvertisementModerationRequest,
    token: string | undefined
  ): Observable<IAdvertisementRequestInterface> {
    return this.patch<IAdvertisementRequestInterface>(
      'advertisements/moderation/set',
      advertisement,
      token
    );
  }
}
