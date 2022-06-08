import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { BetModalComponent } from '../bet-modal/bet-modal.component';
import { IAdvertisementInterface } from '../../interfaces/advertisement.interface';

@Component({
  selector: 'app-advertisement-buttons',
  templateUrl: './advertisement-buttons.component.html',
  styleUrls: ['./advertisement-buttons.component.scss'],
})
export class AdvertisementButtonsComponent {
  @Input() public advertisement: IAdvertisementInterface;
  @Output() public setBet: EventEmitter<string> = new EventEmitter<string>();

  public bet: string;

  constructor(public dialog: MatDialog) {}

  public openBetModal(): void {
    const dialogRef = this.dialog.open(BetModalComponent, {
      panelClass: 'bet-modal-container',
      width: '100%',
      maxWidth: '408px',
      minWidth: '320px',
      data: {
        currency: this.advertisement.currency,
        price: this.advertisement.price,
        bet: this.bet,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.bet = result;
      this.setBet.emit(this.bet);
    });
  }
}
