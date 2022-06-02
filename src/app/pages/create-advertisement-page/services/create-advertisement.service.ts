import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { BaseService } from '../../../shared/services/base.service';
import { IAdvertisementApiResponse } from '../interfaces/create-advertisement-api-response.interface';
import {
  ICategory,
  ICountry,
  ICurrency,
  ILocation,
  IUnit,
} from '../interfaces/create-advertisement.interface';

@Injectable({
  providedIn: 'root',
})
export class CreateAdvertisementService extends BaseService {
  public countries: ICountry[] = [
    { value: 'Uzbekistan', viewValue: 'Uzbekistan' },
  ];

  public units: IUnit[] = [
    { value: 'ton', viewValue: 'ton' },
    { value: 'kg', viewValue: 'kg' },
    { value: 'pcs', viewValue: 'pcs.' },
  ];

  public currencies: ICurrency[] = [
    { value: 'USD', viewValue: 'USD' },
    { value: 'EUR', viewValue: 'EUR' },
    { value: 'UZS', viewValue: 'UZS' },
  ];
  public categories: ICategory[] = [
    { value: 'Crops', viewValue: 'Crops' },
    { value: 'Dry fruits', viewValue: 'Dry fruits' },
    { value: 'Vegetables', viewValue: 'Vegetables' },
    { value: 'Fruits', viewValue: 'Fruits' },
  ];
  public locations: ILocation[] = [
    { value: 'Andijan Region', viewValue: 'Andijan Region' },
    { value: 'Bukhara Region', viewValue: 'Bukhara Region' },
    { value: 'Fergana Region', viewValue: 'Fergana Region' },
    { value: 'Jizzakh Region', viewValue: 'Jizzakh Region' },
    { value: 'Xorazm Region', viewValue: 'Xorazm Region' },
    { value: 'Namangan Region', viewValue: 'Namangan Region' },
    { value: 'Navoiy Region', viewValue: 'Navoiy Region' },
    { value: 'Qashqadaryo Region', viewValue: 'Qashqadaryo Region' },
    { value: 'Samarqand Region', viewValue: 'Samarqand Region' },
    { value: 'Sirdaryo Region', viewValue: 'Sirdaryo Region' },
    { value: 'Surxondaryo Region', viewValue: 'Surxondaryo Region' },
    { value: 'Tashkent Region', viewValue: 'Tashkent Region' },
    {
      value: 'Republic of Karakalpakstan',
      viewValue: 'Republic of Karakalpakstan',
    },
    { value: 'Tashkent city', viewValue: 'Tashkent city' },
  ];

  constructor(protected override httpClient: HttpClient) {
    super(httpClient);
  }

  public create(
    formAdvertisement: FormData,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    token: string | undefined
  ): Observable<IAdvertisementApiResponse> {
    return this.httpClient
      .post<IAdvertisementApiResponse>(
        `${environment.apiUrl}advertisements`,
        formAdvertisement,
        {
          headers: new HttpHeaders({
            // 'Content-Type': 'multipart/form-data',
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyQHVzZXIudXNlciIsInVzZXJSb2xlcyI6W3siaWQiOjEsInVzZXJfaWQiOjEsInJvbGVfaWQiOjEsImNyZWF0ZWRfYXQiOiIyMDIyLTA2LTAxVDEwOjI5OjIyLjk5MloiLCJ1cGRhdGVkX2F0IjoiMjAyMi0wNi0wMVQxMDoyOToyMi45OTJaIiwicm9sZSI6eyJpZCI6MSwidmFsdWUiOiJ1c2VyIiwiZGVzY3JpcHRpb24iOiLQn9C-0LvRjNC30L7QstCw0YLQtdC70YwifX1dLCJpYXQiOjE2NTQwODA2MjMsImV4cCI6MTY1NDY4NTQyM30.BLHJn0EHYNr5FrTO226GQV_RKx2zur56VLtgUG_yhpc`,
          }),
        }
      )
      .pipe(
        catchError(() => {
          return EMPTY;
        })
      );
  }
}
