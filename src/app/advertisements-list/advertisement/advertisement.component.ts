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

  constructor(private router: Router) {}

  public stopPropagation(event: MouseEvent): void {
    event.stopPropagation();
  }

  public openAd(): void {
    this.router.navigate(['/advertisement', this.advertisement.slug]);
  }
}
