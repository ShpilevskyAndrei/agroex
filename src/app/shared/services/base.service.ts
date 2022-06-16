import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IHttpGetRequestArguments } from '../interfaces/http-get-request-arguments.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  private apiUrl = environment.apiUrl;

  constructor(protected httpClient: HttpClient) {}

  public get<T>(url: string, arg?: IHttpGetRequestArguments): Observable<T> {
    if (arg?.params && Object.keys(arg?.params)) {
      return this.httpClient.get<T>(this.apiUrl + url, {
        params: arg.params,
        headers: this.setHeaders(arg.token).headers,
      });
    }
    return this.httpClient.get<T>(
      this.apiUrl + url,
      this.setHeaders(arg?.token)
    );
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

  public patch<T>(url: string, data: object, token?: string): Observable<T> {
    return this.httpClient.patch<T>(
      this.apiUrl + url,
      data,
      this.setHeaders(token)
    );
  }

  public delete<T>(url: string, token?: string): Observable<T> {
    return this.httpClient.delete<T>(this.apiUrl + url, this.setHeaders(token));
  }

  private setHeaders(token?: string): { headers: HttpHeaders } {
    if (token) {
      return {
        ...this.httpOptions,
        headers: this.httpOptions.headers.set(
          'Authorization',
          `Bearer ${token}`
        ),
      };
    }
    return this.httpOptions;
  }

  /*private handleError(error: HttpErrorResponse): Observable<never> {
      return throwError(() => new Error('Something wrong happened'));
    }*/
}
