import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { IAdvertisementInterface } from '../../advertisements-list/interfaces/advertisement.interface';

@Component({
  selector: 'app-advertisement-buttons-ad-page',
  templateUrl: './advertisement-buttons-ad-page.component.html',
  styleUrls: ['./advertisement-buttons-ad-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvertisementButtonsAdPageComponent {
  @Input() public advertisement: IAdvertisementInterface;
  @Input() public actualCurrency: string | undefined;
  @Input() public newBet: string;
  @Input() public isDisabled = false;
  @Input() public betForm: FormGroup;

  @Output() public setBet: EventEmitter<Record<string, string>> =
    new EventEmitter<Record<string, string>>();
  @Output() public setBuy: EventEmitter<Record<string, string>> =
    new EventEmitter<Record<string, string>>();

  public onClickButton(): void {
    this.setBet.emit({
      newBet: this.newBet,
      slug: this.advertisement.slug,
      title: this.advertisement.title,
    });
    this.betForm.get('bet')?.setValue('');
    this.betForm.markAsUntouched();
  }

  public onSetBuy(): void {
    this.setBuy.emit({
      slug: this.advertisement.slug,
      title: this.advertisement.title,
    });
  }
}
