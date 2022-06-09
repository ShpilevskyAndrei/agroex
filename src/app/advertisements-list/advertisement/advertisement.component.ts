import {
  EventEmitter,
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';

import { IAdvertisementInterface } from '../interfaces/advertisement.interface';
import { IAdvertisementRequestInterface } from '../interfaces/advertisement-request.interface';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvertisementComponent {
  @Input() public advertisement: IAdvertisementInterface;
  @Input() public advertisementsRequest: IAdvertisementRequestInterface | null;
  @Output() public setBet: EventEmitter<Record<string, string | number>> =
    new EventEmitter<Record<string, string | number>>();
  @Output() public betTimerDown: EventEmitter<string> =
    new EventEmitter<string>();

  constructor(private router: Router) {}

  public onSetBet(newBetOptions: Record<string, string | number>): void {
    this.setBet.emit(newBetOptions);
  }

  public onBetTimerDown(slug: string): void {
    this.betTimerDown.emit(slug);
  }

  public stopPropagation(event: MouseEvent): void {
    event.stopPropagation();
  }

  public openAdvertisement(): void {
    this.router.navigate(['/advertisement', this.advertisement.slug]);
  }
}
