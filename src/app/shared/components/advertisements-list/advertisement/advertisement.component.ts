import {
  EventEmitter,
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';

import { IAdvertisementInterface } from '../interfaces/advertisement.interface';
import { IUser } from '../../../interfaces/user.interface';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvertisementComponent {
  @Input() public advertisement: IAdvertisementInterface;
  @Input() public user: IUser | null;
  @Input() public isNavigationToAdvertisementPage: boolean | undefined = false;

  @Output() public setBet: EventEmitter<Record<string, string | number>> =
    new EventEmitter<Record<string, string | number>>();

  constructor(private router: Router) {}

  public onSetBet(newBetOptions: Record<string, string | number>): void {
    this.setBet.emit(newBetOptions);
  }

  public openAdvertisement(): void {
    if (this.isNavigationToAdvertisementPage) {
      this.router.navigate(['/advertisement', this.advertisement.slug]);
    }
  }
}