import { Component, Input } from '@angular/core';

import { Advertisement } from '../interfaces/advertisement';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.scss'],
})
export class AdvertisementComponent {
  @Input() public advertisement: Advertisement;
}
