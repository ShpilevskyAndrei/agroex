import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter, tap } from 'rxjs';

import { IAdvertisementInterface } from '../../interfaces/advertisement.interface';
import { BetModalComponent } from '../bet-modal/bet-modal.component';

@Component({
  selector: 'app-advertisements-list-buttons',
  templateUrl: './advertisements-list-buttons.component.html',
  styleUrls: ['./advertisements-list-buttons.component.scss'],
})
export class AdvertisementsListButtonsComponent {
  @Input() public advertisement: IAdvertisementInterface;
  @Output() public setBet: EventEmitter<Record<string, string>> =
    new EventEmitter<Record<string, string>>();

  private bet: string;

  constructor(private dialog: MatDialog) {}

  public openBetModal(): void {
    this.dialog
      .open(BetModalComponent, {
        panelClass: 'bet-modal-container',
        width: '100%',
        maxWidth: '34rem',
        minWidth: '26.667rem',
        data: {
          currency: this.advertisement.currency,
          price: this.advertisement.price,
          actualBet: this.advertisement.userBets,
          bet: this.bet,
        },
      })
      .afterClosed()
      .pipe(
        filter(Boolean),
        tap((result: string) => {
          this.bet = result;
          this.setBet.emit({ newBet: this.bet, slug: this.advertisement.slug });
        })
      )
      .subscribe();
  }
}
