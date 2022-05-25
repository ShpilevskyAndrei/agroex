import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Category } from './model/category.model';
import { Base2xService } from '../../../shared/services/base-2x.service';

@Injectable()
export class CategoriesService extends Base2xService {
  public getCategories(): Observable<Category[]> {
    return this.get<Category[]>('categories');
  }
}
