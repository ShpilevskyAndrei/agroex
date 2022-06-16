import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-my-advertisements-buttons',
  templateUrl: './my-advertisements-buttons.component.html',
  styleUrls: ['./my-advertisements-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyAdvertisementsButtonsComponent {
  @Output() public confirmDeal: EventEmitter<void> = new EventEmitter<void>();

  public onConfirmDeal(): void {
    this.confirmDeal.emit();
  }
}
