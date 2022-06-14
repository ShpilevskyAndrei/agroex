import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';

import { LoadingStatus } from '../../interfaces/loading-status';
import { IAdvertisementRequestInterface } from './interfaces/advertisement-request.interface';
import { AdvertisementButtonsComponent } from './advertisement/advertisement-buttons/advertisement-buttons.component';

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

  @ContentChild('actionButtons')
  public actionButtonsTemplateRef: TemplateRef<AdvertisementButtonsComponent>;

  public onSetBet(newBetOptions: Record<string, string | number>): void {
    this.setBet.emit(newBetOptions);
  }
}
