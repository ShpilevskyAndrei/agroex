import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

import { IAdvertisementRequestInterface } from '../../../shared/components/advertisements-list/interfaces/advertisement-request.interface';
import { LoadingStatus } from '../../../shared/interfaces/loading-status';
import { AdvertisementsListPageActions } from '../../../state/advertisements-list-page/advertisements-list-page.actions';

@Component({
  selector: 'app-my-advertisements',
  templateUrl: './my-advertisements.component.html',
  styleUrls: ['./my-advertisements.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyAdvertisementsComponent implements OnInit {
  @Input() public advertisementsRequest: IAdvertisementRequestInterface | null;
  @Input() public advertisementsLoadingStatus: LoadingStatus | null;

  /*@Output() public dispatcher: EventEmitter<Function> =
    new EventEmitter<Function>();*/

  public ngOnInit(): void {
    /*this.dispatcher.emit(
      AdvertisementsListPageActions.getAdvertisementsRequest
    );*/
  }
}
