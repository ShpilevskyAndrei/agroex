import { Component, EventEmitter, Input, Output } from '@angular/core';

import { LoadingStatus } from '../../shared/interfaces/loading-status';
import { IUser } from '../../shared/interfaces/user.interface';
import { IAdvertisementRequestInterface } from 'src/app/advertisements-list/interfaces/advertisement-request.interface';
import { IAdvertisementModerationRequest } from 'src/app/moderation-advertisments-list/interfaces/advertisement.interface';

@Component({
  selector: 'app-moderation-advertisments',
  templateUrl: './moderation-advertisments.component.html',
  styleUrls: ['./moderation-advertisments.component.scss'],
})
export class ModerationAdvertismentsComponent {
  @Input() public user: IUser | null;
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
