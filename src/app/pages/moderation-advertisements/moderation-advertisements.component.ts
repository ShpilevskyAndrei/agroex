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
import {
  IAdvertisementInterface,
  IAdvertisementModerationRequest,
} from './interfaces/advertisement.interface';
import { UserRole } from '../../shared/components/header/enums/user-role';
import { PolicyModalContentComponent } from './policy-modal-content/policy-modal-content.component';
import { filter, tap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

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
  @Input() public advertisement: IAdvertisementInterface;

  @Output() public logout: EventEmitter<void> = new EventEmitter<void>();
  @Output()
  public moderationDecision: EventEmitter<IAdvertisementModerationRequest> = new EventEmitter<IAdvertisementModerationRequest>();

  constructor(public dialog: MatDialog) {}

  public openPolicyModal(): void {
    this.dialog
      .open(PolicyModalContentComponent, {
        autoFocus: false,
        width: '70vw',
      })
      .afterClosed()
      .pipe(
        filter(Boolean),
        tap((message: string): void => {
          this.moderationDecision.emit({
            advertisements: {
              ...this.advertisement,
              isModerated: false,
              moderationComment: message,
            },
          });
        })
      )
      .subscribe();
  }

  public onApproveClick(): void {
    this.moderationDecision.emit({
      advertisements: { ...this.advertisement, isModerated: true },
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
}
