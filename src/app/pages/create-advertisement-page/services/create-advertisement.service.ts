import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

import { BaseService } from '../../../shared/services/base.service';
import { IAdvertisementApiResponse } from '../interfaces/create-advertisement-api-response.interface';
import {
  IAdvertisementFormCredentials,
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
    { value: 'uzbekistan', viewValue: 'Uzbekistan' },
  ];

  public units: IUnit[] = [
    { value: 'ton', viewValue: 'ton' },
    { value: 'kg', viewValue: 'kg' },
    { value: 'pcs', viewValue: 'pcs.' },
  ];

  public currencies: ICurrency[] = [
    { value: 'usd', viewValue: 'USD' },
    { value: 'eur', viewValue: 'EUR' },
    { value: 'uzs', viewValue: 'UZS' },
  ];

  public locations: ILocation[] = [
    { value: 'andijan', viewValue: 'Andijan Region' },
    { value: 'bukhara', viewValue: 'Bukhara Region' },
    { value: 'fergana', viewValue: 'Fergana Region' },
    { value: 'jizzakh', viewValue: 'Jizzakh Region' },
    { value: 'xorazm', viewValue: 'Xorazm Region' },
    { value: 'namangan', viewValue: 'Namangan Region' },
    { value: 'navoiy', viewValue: 'Navoiy Region' },
    { value: 'qashqadaryo', viewValue: 'Qashqadaryo Region' },
    { value: 'samarqand', viewValue: 'Samarqand Region' },
    { value: 'sirdaryo', viewValue: 'Sirdaryo Region' },
    { value: 'surxondaryo', viewValue: 'Surxondaryo Region' },
    { value: 'tashkent', viewValue: 'Tashkent Region' },
    { value: 'karakalpakstan', viewValue: 'Republic of Karakalpakstan' },
    { value: 'tashkent', viewValue: 'Tashkent city' },
  ];

  constructor(protected override httpClient: HttpClient) {
    super(httpClient);
  }

  public create(
    formAdvertisement: IAdvertisementFormCredentials
  ): Observable<IAdvertisementApiResponse> {
    return this.httpClient
      .post<IAdvertisementApiResponse>(
        `${environment.apiUrl}advertisements`,
        formAdvertisement,
        {
          headers: new HttpHeaders({
            'Content-Type': 'multipart/form-data',
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
