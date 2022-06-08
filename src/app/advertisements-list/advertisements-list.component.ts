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
  @Output() public setBet: EventEmitter<string> = new EventEmitter<string>();

  public onSetBet(bet: string): void {
    this.setBet.emit(bet);
  }
}
