import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { IAdvertisementInterface } from '../../../../shared/components/advertisements-list/interfaces/advertisement.interface';

@Component({
  selector: 'app-my-advertisements-buttons',
  templateUrl: './my-advertisements-buttons.component.html',
  styleUrls: ['./my-advertisements-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyAdvertisementsButtonsComponent {
  @Input() public advertisement: IAdvertisementInterface;
  @Output() public confirmDeal: EventEmitter<void> = new EventEmitter<void>();

  public onConfirmDeal(): void {
    this.confirmDeal.emit();
  }
}
