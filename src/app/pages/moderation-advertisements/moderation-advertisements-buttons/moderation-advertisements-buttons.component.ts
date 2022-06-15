import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { IAdvertisementInterface } from '../interfaces/advertisement.interface';

@Component({
  selector: 'app-moderation-advertisements-buttons',
  templateUrl: './moderation-advertisements-buttons.component.html',
  styleUrls: ['./moderation-advertisements-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModerationAdvertisementsButtonsComponent {
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
