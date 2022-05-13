import { Injectable } from '@angular/core';
import { Category } from './model/category.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CategoriesService {
  constructor(private http: HttpClient) {}

  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:5000/categories');
  }
}
