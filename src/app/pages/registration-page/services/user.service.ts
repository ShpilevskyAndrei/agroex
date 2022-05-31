import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, throwError } from 'rxjs';

import { UserApiResponse } from '../interfaces/user-api-response.interface';
import { UserCredentials } from '../interfaces/user.interfase';
import { catchError, tap } from 'rxjs/operators';
import { BaseService } from 'src/app/shared/services/base.service';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  constructor(
    private snackbar: MatSnackBar,
    protected override httpClient: HttpClient
  ) {
    super(httpClient);
  }

  public create(
    user: UserCredentials,
    url: string
  ): Observable<UserApiResponse> {
    return this.post<UserApiResponse>(`auth/${url}`, { user }).pipe(
      tap((createdUser: UserApiResponse) =>
        this.snackbar.open(
          `User ${createdUser['user'].username} ${url} will success`,
          'Close',
          {
            duration: 2000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
          }
        )
      ),
      catchError((e) => {
        this.snackbar.open(
          `User could not be ${
            url === 'register' ? 'created' : 'login'
          }, due to: ${e.error.message}`,
          'Close',
          {
            duration: 5000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
          }
        );
        return throwError(() => e);
      })
    );
  }
}
