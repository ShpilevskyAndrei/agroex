import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseService } from '../../shared/services/base.service';
import { IAdvertisementInterface } from '../../advertisements-list/interfaces/advertisement.interface';

@Injectable({ providedIn: 'root' })
export class AdvertisementService extends BaseService {
  public getAdvertisement(
    slug: string | null
  ): Observable<IAdvertisementInterface> {
    return this.get<IAdvertisementInterface>(`advertisements/${slug}`);
  }
}
