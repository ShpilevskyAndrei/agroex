import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter, tap } from 'rxjs';

import { LoadingStatus } from '../../shared/interfaces/loading-status';
import { IUser } from '../../shared/interfaces/user.interface';
import { IAdvertisementRequestInterface } from '../../shared/components/advertisements-list/interfaces/advertisement-request.interface';
import {
  IAdvertisementInterface,
  IAdvertisementModerationRequest,
} from './interfaces/advertisement.interface';
import { UserRole } from '../../shared/components/header/enums/user-role';
import { ModerationMessageModalComponent } from './moderation-message-modal/moderation-message-modal.component';

@Component({
  selector: 'app-moderation-advertisements',
  templateUrl: './moderation-advertisements.component.html',
  styleUrls: ['./moderation-advertisements.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModerationAdvertisementsComponent {
  @Input() public user: IUser | null;
  @Input() public userRole: UserRole | null;
  @Input() public advertisementsRequest: IAdvertisementRequestInterface | null;
  @Input() public advertisementsLoadingStatus: LoadingStatus | null;
  @Input() public advertisement: IAdvertisementInterface;

  @Output() public logout: EventEmitter<void> = new EventEmitter<void>();
  @Output() public reloadModerationPage: EventEmitter<void> =
    new EventEmitter<void>();
  @Output()
  public moderationDecision: EventEmitter<IAdvertisementModerationRequest> = new EventEmitter<IAdvertisementModerationRequest>();

  constructor(public dialog: MatDialog) {}

  public openModerationMessageModal(
    advertisement: IAdvertisementInterface
  ): void {
    this.dialog
      .open(ModerationMessageModalComponent, {
        autoFocus: false,
        width: '60vw',
      })
      .afterClosed()
      .pipe(
        filter(Boolean),
        tap((message: string): void => {
          this.moderationDecision.emit({
            advertisements: {
              slug: advertisement.slug,
              moderationStatus: 'rejected',
              moderationComment: message,
            },
          });
        })
      )
      .subscribe();
  }

  public onApproveClick(advertisement: IAdvertisementInterface): void {
    this.moderationDecision.emit({
      advertisements: {
        slug: advertisement.slug,
        moderationStatus: 'approved',
        moderationComment: null,
      },
    });
  }

  public onModerationDecision(
    moderationDecision: IAdvertisementModerationRequest
  ): void {
    this.moderationDecision.emit(moderationDecision);
  }

  public onLogout(): void {
    this.logout.emit();
  }

  public onClickreloadModerationPage(): void {
    this.reloadModerationPage.emit();
  }
}
