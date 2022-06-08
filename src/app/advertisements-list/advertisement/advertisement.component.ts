import { Component, Input } from '@angular/core';

import { IAdvertisementInterface } from '../interfaces/advertisement.interface';
import { Router } from '@angular/router';
import { IAdvertisementRequestInterface } from '../interfaces/advertisement-request.interface';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.scss'],
})
export class AdvertisementComponent {
  @Input() public advertisement: IAdvertisementInterface;
  @Input() public advertisementsRequest: IAdvertisementRequestInterface | null;

  public thisAd: Object;

  constructor(private router: Router) {}

  public stopPropagation(event: any): void {
    event.stopPropagation();
  }

  public openAd(): Object {
    const thisAdSlug: string = this.advertisement.slug;
    console.log(thisAdSlug);
    this.thisAd = this.advertisement;
    console.log(this.thisAd);
    this.router.navigate(['advertisement-card']);
    return this.thisAd;

    // const thisAd: Object = this.advertisementsRequest?.advertisements.find(
    //   (x) => x.slug === thisAdSlug
    // );
    // console.log(thisAd);
  }

  public test(): void {
    console.log('buttons works');
  }
}
