import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IAdvertisementInterface } from '../../../shared/components/advertisements-list/interfaces/advertisement.interface';
import { IUser } from '../../../shared/interfaces/user.interface';

@Component({
  selector: 'app-advertisement-title-ad-page',
  templateUrl: './advertisement-title-ad-page.component.html',
  styleUrls: ['./advertisement-title-ad-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvertisementTitleAdPageComponent {
  @Input() public advertisement: IAdvertisementInterface;
  @Input() public user: IUser | null;
  @Input() public showOwnerFlag: boolean;
}
