import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IAdRequestInterface } from '../../advertisements-list/interfaces/ad-request.interface';
import { BaseService } from '../../shared/services/base.service';

@Injectable({ providedIn: 'root' })
export class AdvertisementService extends BaseService {
  public getAdvertisement(
    slug: string | null
  ): Observable<IAdRequestInterface> {
    return this.get<IAdRequestInterface>(`advertisements/${slug}`);
  }
}
