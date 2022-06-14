import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter, tap } from 'rxjs';

import {
  IAdvertisementInterface,
  IAdvertisementModerationRequest,
} from '../interfaces/advertisement.interface';
import { PolicyModalContentComponent } from './policy-modal-content/policy-modal-content.component';

@Component({
  selector: 'app-moderation-advertisement',
  templateUrl: './moderation-advertisement.component.html',
  styleUrls: ['./moderation-advertisement.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModerationAdvertisementComponent {
  @Input() public advertisement: IAdvertisementInterface;

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
}
