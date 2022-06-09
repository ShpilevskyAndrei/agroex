import { Component, EventEmitter, Input, Output } from '@angular/core';

import { LoadingStatus } from '../shared/interfaces/loading-status';
import { IAdvertisementRequestInterface } from './interfaces/advertisement-request.interface';

@Component({
  selector: 'app-advertisements-list',
  templateUrl: './advertisements-list.component.html',
  styleUrls: ['./advertisements-list.component.scss'],
})
export class AdvertisementsListComponent {
  @Input() public advertisementsRequest: IAdvertisementRequestInterface | null;
  @Input() public advertisementsLoadingStatus: LoadingStatus | null;
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
