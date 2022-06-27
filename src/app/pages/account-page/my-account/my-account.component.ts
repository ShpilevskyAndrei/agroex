import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IUser } from '../../../shared/interfaces/user.interface';

export interface UserData {
  email: string | undefined;
  username: string | undefined;
  phone: string | undefined;
}

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyAccountComponent {
  @Input() public user: IUser | null;

  public enableForm = false;

  public stopPropagation(event: MouseEvent): void {
    event.stopPropagation();
  }
}
