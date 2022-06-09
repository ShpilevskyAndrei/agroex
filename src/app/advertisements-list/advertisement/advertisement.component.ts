import { Component, Input } from '@angular/core';

import { IAdvertisementInterface } from '../interfaces/advertisement.interface';
import { Router } from '@angular/router';
import { IAdvertisementRequestInterface } from '../interfaces/advertisement-request.interface';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.scss'],
})
export class AdvertisementComponent {
  @Input() public advertisement: IAdvertisementInterface;
  @Input() public advertisementsRequest: IAdvertisementRequestInterface | null;

  constructor(private router: Router, private store: Store) {}

  public stopPropagation(event: any): void {
    event.stopPropagation();
  }

  public openAd(): void {
    // const thisAdSlug: string = this.advertisement.slug;
    // console.log(thisAdSlug);
    // const advertisement: IAdvertisementInterface = this.advertisement;
    // console.log(thisAd);
    // this.store.dispatch(
    //   AdvertisementActions.getAdvertisementRequest({ advertisement })
    // ); // output to card // dp в контейнер!!!
    this.router.navigate(['/advertisement', this.advertisement.slug]);
  }
}
