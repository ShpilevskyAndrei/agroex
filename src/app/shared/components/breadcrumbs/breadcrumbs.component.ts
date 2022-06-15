import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IAdvertisementInterface } from '../advertisements-list/interfaces/advertisement.interface';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {
  @Input() public advertisement: IAdvertisementInterface;
}
