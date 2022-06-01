import { Component, Input } from '@angular/core';

import { LoadingStatus } from '../shared/interfaces/loading-status';
import { AdvertisementRequest } from './interfaces/advertisement-request';

@Component({
  selector: 'app-advertisements-list',
  templateUrl: './advertisements-list.component.html',
  styleUrls: ['./advertisements-list.component.scss'],
})
export class AdvertisementsListComponent {
  @Input() public advertisementsRequest: AdvertisementRequest | null;
  @Input() public advertisementsLoadingStatus: LoadingStatus | null;
}
