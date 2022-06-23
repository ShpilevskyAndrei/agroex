import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import {
  IAdvertisementInterface,
  IMyBetInterface,
} from '../../interfaces/advertisement.interface';
import { IUser } from '../../../../interfaces/user.interface';

@Component({
  selector: 'app-advertisement-title',
  templateUrl: './advertisement-title.component.html',
  styleUrls: ['./advertisement-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvertisementTitleComponent {
  @Input() public advertisement: IAdvertisementInterface | IMyBetInterface;
  @Input() public user: IUser | null;
  @Input() public showOwnerFlag: boolean;
}
