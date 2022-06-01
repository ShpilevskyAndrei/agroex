import { Component, Input } from '@angular/core';

import { Advertisement } from '../../interfaces/advertisement';

@Component({
  selector: 'app-advertisement-title',
  templateUrl: './advertisement-title.component.html',
  styleUrls: ['./advertisement-title.component.scss'],
})
export class AdvertisementTitleComponent {
  @Input() public advertisement: Advertisement;
}
