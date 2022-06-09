import { Component, Input } from '@angular/core';
import { IAdvertisementInterface } from '../../../advertisements-list/interfaces/advertisement.interface';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent {
  @Input() public advertisement: IAdvertisementInterface;
}
