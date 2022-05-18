import { HttpErrorResponse } from '@angular/common/http';

export interface LoadingStatus {
  loading: boolean;
  loaded: boolean;
  error: HttpErrorResponse | null;
}
