import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseService } from '../shared/services/base.service';
import { AdvertisementRequest } from './interfaces/advertisement-request';

@Injectable({
  providedIn: 'root',
})
export class AdvertisementsListService extends BaseService {
  public getAdvertisements(): Observable<AdvertisementRequest> {
    return this.get<AdvertisementRequest>('advertisements');
  }
}
