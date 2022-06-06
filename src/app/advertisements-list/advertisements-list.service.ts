import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseService } from '../shared/services/base.service';
import { IAdvertisementRequestInterface } from './interfaces/advertisement-request.interface';

@Injectable()
export class AdvertisementsListService extends BaseService {
  public getAdvertisements(): Observable<IAdvertisementRequestInterface> {
    return this.get<IAdvertisementRequestInterface>('advertisements');
  }
}
