import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IAdvertisementRequestInterface } from '../../../shared/components/advertisements-list/interfaces/advertisement-request.interface';
import { LoadingStatus } from '../../../shared/interfaces/loading-status';

@Component({
  selector: 'app-my-advertisements',
  templateUrl: './my-advertisements.component.html',
  styleUrls: ['./my-advertisements.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyAdvertisementsComponent {
  @Input() public advertisementsRequest: IAdvertisementRequestInterface | null;
  @Input() public advertisementsLoadingStatus: LoadingStatus | null;
}
