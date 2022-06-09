import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
import { Observable, timer } from 'rxjs';
import { takeWhile, map } from 'rxjs';

import { IAdvertisementInterface } from '../../interfaces/advertisement.interface';

@Component({
  selector: 'app-advertisement-price',
  templateUrl: './advertisement-price.component.html',
  styleUrls: ['./advertisement-price.component.scss'],
})
export class AdvertisementPriceComponent implements OnInit {
  @Input() public advertisement: IAdvertisementInterface;
  @Output() public betTimerDown: EventEmitter<string> =
    new EventEmitter<string>();

  public timer$: Observable<number>;

  public ngOnInit(): void {
    const expireTime = moment(
      this.advertisement.userBets[0]?.expireBet
    ).valueOf();

    this.timer$ = timer(0, 1000).pipe(
      map(() => expireTime - moment().add(179, 'minutes').valueOf()),
      takeWhile((time: number) => {
        if (time < 0) {
          this.betTimerDown.emit(this.advertisement.slug);
        }
        return true;
      })
    );
  }
}
