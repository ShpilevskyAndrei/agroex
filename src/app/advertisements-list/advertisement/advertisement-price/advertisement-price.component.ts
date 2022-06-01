import { Component, Input } from '@angular/core';

import { Advertisement } from '../../interfaces/advertisement';

@Component({
  selector: 'app-advertisement-price',
  templateUrl: './advertisement-price.component.html',
  styleUrls: ['./advertisement-price.component.scss'],
})
export class AdvertisementPriceComponent {
  @Input() public advertisement: Advertisement;
}
