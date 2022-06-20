import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IUser } from '../../../../interfaces/user.interface';

@Component({
  selector: 'app-advertisement-buttons',
  templateUrl: './advertisement-buttons.component.html',
  styleUrls: ['./advertisement-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvertisementButtonsComponent {
  @Input() public user: IUser | null;
}
