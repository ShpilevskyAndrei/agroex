import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { fromEvent, first, tap } from 'rxjs';

import { PolicyModalContentComponent } from './policy-modal-content/policy-modal-content.component';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
})
export class RegistrationPageComponent {
  constructor(public dialog: MatDialog) {}

  public openDialog(): void {
    this.dialog
      .open(PolicyModalContentComponent, {
        autoFocus: false,
      })
      .afterClosed()
      .pipe(
        first(),
        tap((accepted: boolean) => console.log(accepted))
      )
      .subscribe();
  }
}
