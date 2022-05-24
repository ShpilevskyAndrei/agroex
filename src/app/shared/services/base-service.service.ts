import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseServiceService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  private apiUrl = 'https://agroex-backend.herokuapp.com/';

  constructor(protected httpClient: HttpClient) {}

  public get<T>(url: string, token?: string): Observable<T> {
    return this.httpClient
      .get<T>(this.apiUrl + url, this.setHeaders(token))
      .pipe(catchError(this.handleError));
  }

  public post<T>(url: string, data: object, token?: string): Observable<T> {
    return this.httpClient
      .post<T>(this.apiUrl + url, data, this.setHeaders(token))
      .pipe(catchError(this.handleError));
  }

  public put<T>(url: string, data: object, token?: string): Observable<T> {
    return this.httpClient
      .put<T>(this.apiUrl + url, data, this.setHeaders(token))
      .pipe(catchError(this.handleError));
  }

  public delete<T>(url: string, token?: string): Observable<T> {
    return this.httpClient
      .delete<T>(this.apiUrl + url, this.setHeaders(token))
      .pipe(catchError(this.handleError));
  }

  private setHeaders(token?: string): { headers: HttpHeaders } {
    if (token) {
      this.httpOptions.headers = this.httpOptions.headers.set(
        'Authorization',
        `Bearer ${token}`
      );

      return this.httpOptions;
    } else {
      return this.httpOptions;
    }
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError('Something wrong happened' + error);
  }
}
