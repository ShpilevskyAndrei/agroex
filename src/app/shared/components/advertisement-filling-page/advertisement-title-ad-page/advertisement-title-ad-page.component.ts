import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IUser } from '../../../../shared/interfaces/user.interface';
import { IAdvertisementInterface } from '../../advertisements-list/interfaces/advertisement.interface';

@Component({
  selector: 'app-advertisement-title-ad-page',
  templateUrl: './advertisement-title-ad-page.component.html',
  styleUrls: ['./advertisement-title-ad-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvertisementTitleAdPageComponent {
  @Input() public advertisement: IAdvertisementInterface;
  @Input() public user: IUser | null;
  @Input() public showOwnerFlag: boolean = true;
}
