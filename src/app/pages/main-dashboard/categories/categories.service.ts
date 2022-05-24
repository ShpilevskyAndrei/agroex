import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Category } from './model/category.model';
import { BaseServiceService } from '../../../shared/services/base-service.service';

@Injectable()
export class CategoriesService extends BaseServiceService {
  public getCategories(): Observable<Category[]> {
    return this.get<Category[]>('categories');
  }
}
