import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IAdvertisementInterface } from '../interfaces/advertisement.interface';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.scss'],
})
export class AdvertisementComponent {
  @Input() public advertisement: IAdvertisementInterface;
  @Output() public setBet: EventEmitter<string> = new EventEmitter<string>();

  public onSetBet(bet: string): void {
    this.setBet.emit(bet);
  }
}
