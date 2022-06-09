import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-moderation-advertisement-buttons',
  templateUrl: './moderation-advertisement-buttons.component.html',
  styleUrls: ['./moderation-advertisement-buttons.component.scss'],
})
export class ModerationAdvertisementButtonsComponent {
  @Output() public reject: EventEmitter<void> = new EventEmitter<void>();
  @Output() public approve: EventEmitter<void> = new EventEmitter<void>();

  public onRejectClick(): void {
    this.reject.emit();
  }

  public onApproveClick(): void {
    this.approve.emit();
  }
}
