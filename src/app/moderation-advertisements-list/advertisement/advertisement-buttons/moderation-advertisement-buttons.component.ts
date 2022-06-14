import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { IAdvertisementInterface } from '../../interfaces/advertisement.interface';

@Component({
  selector: 'app-moderation-advertisement-buttons',
  templateUrl: './moderation-advertisement-buttons.component.html',
  styleUrls: ['./moderation-advertisement-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModerationAdvertisementButtonsComponent {
  @Input() public advertisement: IAdvertisementInterface;

  @Output() public reject: EventEmitter<void> = new EventEmitter<void>();
  @Output() public approve: EventEmitter<void> = new EventEmitter<void>();

  public onRejectClick(): void {
    this.reject.emit();
  }

  public onApproveClick(): void {
    this.approve.emit();
  }
}
