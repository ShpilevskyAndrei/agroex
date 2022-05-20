import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, throwError } from 'rxjs';
import { ApiUser } from '../interfaces/user.interfase';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private snackbar: MatSnackBar) {}

  public create(user: ApiUser, url: string): Observable<ApiUser> {
    return this.http
      .post<ApiUser>(`https://agroex-backend.herokuapp.com/users/${url}`, user)
      .pipe(
        tap((createdUser: ApiUser) =>
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
            `User could not be created, due to: ${e.error.message}`,
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
