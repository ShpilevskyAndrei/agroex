import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { BetModalComponent } from '../bet-modal/bet-modal.component';

@Component({
  selector: 'app-advertisement-buttons',
  templateUrl: './advertisement-buttons.component.html',
  styleUrls: [
    './advertisement-buttons.component.scss',
    '../styles/adv-common-styles.scss',
  ],
})
export class AdvertisementButtonsComponent {
  public animal: string;

  constructor(public dialog: MatDialog) {}

  public openBetModal(): void {
    const dialogRef = this.dialog.open(BetModalComponent, {
      width: '250px',
      data: { animal: this.animal },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.animal = result;
    });
  }
}
