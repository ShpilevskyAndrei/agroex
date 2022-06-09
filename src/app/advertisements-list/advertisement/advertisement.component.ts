import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IAdvertisementInterface } from '../interfaces/advertisement.interface';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.scss'],
})
export class AdvertisementComponent {
  @Input() public advertisement: IAdvertisementInterface;
  @Output() public setBet: EventEmitter<Record<string, string | number>> =
    new EventEmitter<Record<string, string | number>>();
  @Output() public betTimerDown: EventEmitter<string> =
    new EventEmitter<string>();

  public onSetBet(newBetOptions: Record<string, string | number>): void {
    this.setBet.emit(newBetOptions);
  }

  public onBetTimerDown(slug: string): void {
    this.betTimerDown.emit(slug);
  }
}
