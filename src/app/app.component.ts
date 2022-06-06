import { Component, Input } from '@angular/core';

import { TITLE } from './shared/constants/app-consts';
import { LoadingStatus } from './shared/interfaces/loading-status';
import { IconSerializeService } from './shared/services/icon-serialize.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Input() public appRootLoadingStatus: LoadingStatus | null;
  public title = TITLE;

  constructor(private iconSerialize: IconSerializeService) {}
}
