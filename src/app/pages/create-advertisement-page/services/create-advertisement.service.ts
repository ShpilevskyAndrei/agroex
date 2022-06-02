import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
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
export class CreateAdvertisementService {
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

  constructor(private httpClient: HttpClient) {}

  public create(
    formAdvertisement: FormData,
    token?: string
  ): Observable<IAdvertisementApiResponse> {
    return this.httpClient
      .post<IAdvertisementApiResponse>(
        `${environment.apiUrl}advertisements`,
        formAdvertisement,
        {
          headers: new HttpHeaders({
            Authorization: `Bearer ${token} `,
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
