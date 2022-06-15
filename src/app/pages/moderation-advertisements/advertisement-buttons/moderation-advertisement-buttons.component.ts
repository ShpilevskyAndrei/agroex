import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { IAdvertisementInterface } from '../interfaces/advertisement.interface';

@Component({
  selector: 'app-moderation-advertisement-buttons',
  templateUrl: './moderation-advertisement-buttons.component.html',
  styleUrls: ['./moderation-advertisement-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModerationAdvertisementButtonsComponent {
  @Input() public advertisement: IAdvertisementInterface;

  @Output() public reject: EventEmitter<IAdvertisementInterface> = new EventEmitter<IAdvertisementInterface>();
  @Output() public approve: EventEmitter<IAdvertisementInterface> = new EventEmitter<IAdvertisementInterface>();

  public onRejectClick(): void {
    this.reject.emit(this.advertisement);
  }

  public onApproveClick(): void {
    this.approve.emit(this.advertisement);
  }
}
