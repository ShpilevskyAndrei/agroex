import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guest-modal',
  templateUrl: './guest-modal.component.html',
  styleUrls: ['./guest-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuestModalComponent {
  constructor(
    private dialogRef: MatDialogRef<GuestModalComponent>,
    private router: Router
  ) {}

  public onCloseModal(): void {
    this.dialogRef.close();
  }

  public onLogin(): void {
    this.onCloseModal();
    this.router.navigate(['registration']);
  }
}
