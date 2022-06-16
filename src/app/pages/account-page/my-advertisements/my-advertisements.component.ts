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
import { AccountPageActions } from '../../../state/account-page/account-page.actions';

@Component({
  selector: 'app-my-advertisements',
  templateUrl: './my-advertisements.component.html',
  styleUrls: ['./my-advertisements.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyAdvertisementsComponent implements OnInit {
  @Input()
  public myAdvertisementsRequest: IAdvertisementRequestInterface | null;
  @Input() public myAdvertisementsLoadingStatus: LoadingStatus | null;

  @Output() public dispatcher: EventEmitter<Function> =
    new EventEmitter<Function>();

  public ngOnInit(): void {
    this.dispatcher.emit(AccountPageActions.getMyAdvertisementsRequest);
  }
}
