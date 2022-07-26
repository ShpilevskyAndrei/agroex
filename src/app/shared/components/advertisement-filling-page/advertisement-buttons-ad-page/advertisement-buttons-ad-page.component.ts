import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { IAdvertisementInterface } from '../../advertisements-list/interfaces/advertisement.interface';
import { GuestModalComponent } from '../../advertisements-list/advertisement/guest-modal/guest-modal.component';
import { IUser } from '../../../interfaces/user.interface';
import { BuyModalComponent } from '../../advertisements-list/advertisement/buy-modal/buy-modal.component';
import { filter, tap } from 'rxjs';

@Component({
  selector: 'app-advertisement-buttons-ad-page',
  templateUrl: './advertisement-buttons-ad-page.component.html',
  styleUrls: ['./advertisement-buttons-ad-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvertisementButtonsAdPageComponent {
  @Input() public user: IUser | null;
  @Input() public advertisement: IAdvertisementInterface;
  @Input() public actualCurrency: string | undefined;
  @Input() public newBet: string;
  @Input() public isDisabled = false;
  @Input() public betForm: FormGroup;

  @Output() public setBet: EventEmitter<Record<string, string>> =
    new EventEmitter<Record<string, string>>();
  @Output() public setBuy: EventEmitter<Record<string, string>> =
    new EventEmitter<Record<string, string>>();

  constructor(private dialog: MatDialog) {}

  public unigueUserCode(
    name: string | undefined,
    phone: string | undefined
  ): string {
    if (name && phone) {
      const letters = name.substring(0, 2).toLowerCase();
      const numbers = phone.replace(/[^0-9]/g, '');
      return `${letters} ${numbers}`;
    }
    return '';
  }

  public onSetBet(): void {
    this.setBet.emit({
      newBet: this.newBet,
      slug: this.advertisement.slug,
      title: this.advertisement.title,
    });
    this.betForm.get('bet')?.setValue('');
    this.betForm.markAsUntouched();
  }

  public openGuestModal(): void {
    this.dialog.open(GuestModalComponent);
  }

  public onSetBuy(): void {
    this.setBuy.emit({
      slug: this.advertisement.slug,
      title: this.advertisement.title,
    });
  }

  public openBuyModal(): void {
    this.dialog
      .open(BuyModalComponent, {
        panelClass: 'buy-modal-container',
        width: '100%',
        maxWidth: '34rem',
        minWidth: '26.667rem',
        data: {
          price: this.advertisement.price,
          currency: this.advertisement.currency,
          unit: this.advertisement.unit,
          quantity: this.advertisement.quantity,
          id: this.advertisement.id,
          title: this.advertisement.title,
          location: this.advertisement.location,
          seller: this.advertisement.author.username,
          sellerUniqueUserCode: this.unigueUserCode(
            this.advertisement.author.username,
            this.advertisement.author.phone
          ),
          buyer: this.user?.username,
          buyerUniqueUserCode: this.unigueUserCode(
            this.user?.username,
            this.user?.phone
          ),
        },
      })
      .afterClosed()
      .pipe(
        filter(Boolean),
        tap(() => {
          this.setBuy.emit({
            slug: this.advertisement.slug,
            title: this.advertisement.title,
          });
        })
      )
      .subscribe();
  }
}
