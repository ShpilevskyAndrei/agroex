import { Component, EventEmitter, Input, Output } from '@angular/core';

import { LoadingStatus } from '../shared/interfaces/loading-status';
import { IUser } from '../shared/interfaces/user.interface';
import { IAdvertisementRequestInterface } from './interfaces/advertisement-request.interface';
import { IAdvertisementModerationRequest } from './interfaces/advertisement.interface';

@Component({
  selector: 'app-moderation-advertisements-list',
  templateUrl: './moderation-advertisements-list.component.html',
  styleUrls: ['./moderation-advertisements-list.component.scss'],
})
export class ModerationAdvertisementsListComponent {
  @Input() public user: IUser | null;
  @Input() public advertisementsRequest: IAdvertisementRequestInterface | null;
  @Input() public advertisementsLoadingStatus: LoadingStatus | null;

  @Output()
  public moderationDecision: EventEmitter<IAdvertisementModerationRequest> = new EventEmitter<IAdvertisementModerationRequest>();

  public onModerationDecision(
    moderationDecision: IAdvertisementModerationRequest
  ): void {
    this.moderationDecision.emit(moderationDecision);
  }
}
