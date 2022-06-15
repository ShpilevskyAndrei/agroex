import { Component, Input } from '@angular/core';

import { IAdvertisementInterface } from '../../interfaces/advertisement.interface';

@Component({
  selector: 'app-advertisement-price',
  templateUrl: './advertisement-price.component.html',
  styleUrls: ['./advertisement-price.component.scss'],
})
export class AdvertisementPriceComponent {
  @Input() public advertisement: IAdvertisementInterface;
}
