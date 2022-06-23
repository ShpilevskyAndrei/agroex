import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseService } from '../../shared/services/base.service';
import { IAdRequestInterface } from '../../shared/components/advertisements-list/interfaces/ad-request.interface';

@Injectable({ providedIn: 'root' })
export class AdvertisementService extends BaseService {
  public getAdvertisement(
    slug: string | null
  ): Observable<IAdRequestInterface> {
    return this.get<IAdRequestInterface>(`advertisements/slug/${slug}`);
  }
}
