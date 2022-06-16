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
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyOrdersComponent implements OnInit {
  @Input()
  public myOrdersRequest: IAdvertisementRequestInterface | null;
  @Input() public myOrdersLoadingStatus: LoadingStatus | null;

  @Output() public dispatcher: EventEmitter<Function> =
    new EventEmitter<Function>();

  public ngOnInit(): void {
    this.dispatcher.emit(AccountPageActions.getMyOrdersRequest);
  }
}
