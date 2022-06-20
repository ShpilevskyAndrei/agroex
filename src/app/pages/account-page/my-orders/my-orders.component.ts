import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

import { LoadingStatus } from '../../../shared/interfaces/loading-status';
import { AccountPageActions } from '../../../state/account-page/account-page.actions';
import { IMyOrdersInterface } from './interfaces/my-orders-request.interface';
import { IUser } from '../../../shared/interfaces/user.interface';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyOrdersComponent implements OnInit {
  @Input()
  public myOrdersRequest: IMyOrdersInterface[] | null;
  @Input() public myOrdersLoadingStatus: LoadingStatus | null;
  @Input() public user: IUser | null;

  @Output() public dispatcher: EventEmitter<Function> =
    new EventEmitter<Function>();

  public ngOnInit(): void {
    this.dispatcher.emit(AccountPageActions.getMyOrdersRequest);
  }
}
