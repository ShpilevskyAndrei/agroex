import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { IAdvertisementApiResponse } from '../interfaces/create-advertisement-api-response.interface';
import {
  ICategory,
  ICountry,
  ICurrency,
  ILocation,
  IProductType,
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

  public productTypes: IProductType[] = [
    { value: 'Almond', viewValue: 'Almond' },
    { value: 'Apple', viewValue: 'Apple' },
    { value: 'Apricot', viewValue: 'Apricot' },
    { value: 'Cabbage', viewValue: 'Cabbage' },
    { value: 'Cherry', viewValue: 'Cherry' },
    { value: 'Corn', viewValue: 'Corn' },
    { value: 'Cucumber', viewValue: 'Cucumber' },
    {
      value: 'Lemon',
      viewValue: 'Lemon',
    },
    { value: 'Onion', viewValue: 'Onion' },
    { value: 'Parsley', viewValue: 'Parsley' },
    { value: 'Peach', viewValue: 'Peach' },
    { value: 'Persimmon', viewValue: 'Persimmon' },
    { value: 'Plum', viewValue: 'Plum' },
    { value: 'Potato', viewValue: 'Potato' },
    { value: 'Rice', viewValue: 'Rice' },
    { value: 'Tomato', viewValue: 'Tomato' },
    { value: 'Watermelon', viewValue: 'Watermelon' },
    { value: 'Walnut', viewValue: 'Walnut' },
    { value: 'Wheat', viewValue: 'Wheat' },
  ];

  constructor(private httpClient: HttpClient) {}

  public create(
    formAdvertisement: FormData,
    token?: string
  ): Observable<IAdvertisementApiResponse> {
    return this.httpClient.post<IAdvertisementApiResponse>(
      `${environment.apiUrl}advertisements`,
      formAdvertisement,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${token} `,
        }),
      }
    );
  }
}
