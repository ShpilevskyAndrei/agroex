import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter, tap } from 'rxjs';

import { IAdvertisementInterface } from '../../interfaces/advertisement.interface';
import { BetModalComponent } from '../bet-modal/bet-modal.component';
import { IUser } from '../../../../interfaces/user.interface';

@Component({
  selector: 'app-advertisements-list-buttons',
  templateUrl: './advertisements-list-buttons.component.html',
  styleUrls: ['./advertisements-list-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvertisementsListButtonsComponent {
  @Input() public advertisement: IAdvertisementInterface;
  @Input() public user: IUser | null;

  @Output() public setBet: EventEmitter<Record<string, string>> =
    new EventEmitter<Record<string, string>>();
  @Output() public setBuy: EventEmitter<Record<string, string>> =
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
          unit: this.advertisement.unit,
          quantity: this.advertisement.quantity,
        },
      })
      .afterClosed()
      .pipe(
        filter(Boolean),
        tap((result: string) => {
          this.bet = result;
          this.setBet.emit({
            newBet: this.bet,
            slug: this.advertisement.slug,
            title: this.advertisement.title,
          });
        })
      )
      .subscribe();
  }

  public onSetBuy(): void {
    this.setBuy.emit({
      slug: this.advertisement.slug,
      title: this.advertisement.title,
    });
  }

  public stopPropagation(event: MouseEvent): void {
    event.stopPropagation();
  }
}
