import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { LoadingStatus } from '../../shared/interfaces/loading-status';
import { IUser } from '../../shared/interfaces/user.interface';
import { IAdvertisementRequestInterface } from '../../shared/components/advertisements-list/interfaces/advertisement-request.interface';
import { IAdvertisementModerationRequest } from '../../moderation-advertisements-list/interfaces/advertisement.interface';
import { UserRole } from '../../shared/components/header/enums/user-role';

@Component({
  selector: 'app-moderation-advertisements',
  templateUrl: './moderation-advertisements.component.html',
  styleUrls: ['./moderation-advertisements.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModerationadvertisementsComponent {
  @Input() public user: IUser | null;
  @Input() public userRole: UserRole | null;
  @Input() public advertisementsRequest: IAdvertisementRequestInterface | null;
  @Input() public advertisementsLoadingStatus: LoadingStatus | null;

  @Output() public logout: EventEmitter<void> = new EventEmitter<void>();
  @Output()
  public moderationDecision: EventEmitter<IAdvertisementModerationRequest> = new EventEmitter<IAdvertisementModerationRequest>();

  public onModerationDecision(
    moderationDecision: IAdvertisementModerationRequest
  ): void {
    this.moderationDecision.emit(moderationDecision);
  }

  public onLogout(): void {
    this.logout.emit();
  }
}
