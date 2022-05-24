import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  public get<T>(url: string, params?: { params: HttpParams }): Observable<T> {
    return this.httpClient.get<T>(this.apiUrl + url, params);
  }

  public post<T>(url: string, data: object, token?: string): Observable<T> {
    return this.httpClient.post<T>(
      this.apiUrl + url,
      data,
      this.setHeaders(token)
    );
  }

  public put<T>(url: string, data: object, token?: string): Observable<T> {
    return this.httpClient.put<T>(
      this.apiUrl + url,
      data,
      this.setHeaders(token)
    );
  }

  public delete<T>(url: string, token?: string): Observable<T> {
    return this.httpClient.delete<T>(this.apiUrl + url, this.setHeaders(token));
  }

  private setHeaders(token?: string): { headers: HttpHeaders } {
    return token
      ? {
          ...this.httpOptions,
          headers: this.httpOptions.headers.set(
            'Authorization',
            `Bearer ${token}`
          ),
        }
      : this.httpOptions;
  }

  /*private handleError(error: HttpErrorResponse): Observable<never> {
      return throwError(() => new Error('Something wrong happened'));
    }*/
}
