import {
  EventEmitter,
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';

import { IAdvertisementInterface } from '../interfaces/advertisement.interface';
import { IUser } from '../../../interfaces/user.interface';
import { UserRole } from '../../header/enums/user-role';
import { ModerationStatus } from '../../header/enums/moderation-status';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvertisementComponent {
  @Input() public advertisement: IAdvertisementInterface;
  @Input() public user: IUser | null;
  @Input() public userRole: UserRole | null;
  @Input() public isNavigationToAdvertisementPage: boolean | undefined = false;
  @Input() public showOwnerFlag: boolean;
  @Input() public moderationPage: boolean;

  @Output() public setBet: EventEmitter<Record<string, string | number>> =
    new EventEmitter<Record<string, string | number>>();

  public ModerationStatus = ModerationStatus;

  constructor(private router: Router) {}

  public onSetBet(newBetOptions: Record<string, string | number>): void {
    this.setBet.emit(newBetOptions);
  }

  public openAdvertisement(): void {
    if (this.isNavigationToAdvertisementPage) {
      this.router.navigate(['/advertisement', this.advertisement.slug]);
    }
  }
}
