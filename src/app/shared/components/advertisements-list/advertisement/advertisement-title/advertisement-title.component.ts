import { Component, Input } from '@angular/core';

import { IAdvertisementInterface } from '../../interfaces/advertisement.interface';
import { IUser } from '../../../../interfaces/user.interface';

@Component({
  selector: 'app-advertisement-title',
  templateUrl: './advertisement-title.component.html',
  styleUrls: ['./advertisement-title.component.scss'],
})
export class AdvertisementTitleComponent {
  @Input() public advertisement: IAdvertisementInterface;
  @Input() public user: IUser | null;
  @Input() public showOwnerFlag = true;
}
