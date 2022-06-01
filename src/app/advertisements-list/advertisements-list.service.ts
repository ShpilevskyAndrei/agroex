import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseService } from '../shared/services/base.service';
import { Category } from '../pages/main-dashboard/categories/model/category.model';

@Injectable({
  providedIn: 'root',
})
export class AdvertisementsListService extends BaseService {
  public getAdvertisements(): Observable<Category[]> {
    return this.get<Category[]>('categories');
  }
}
