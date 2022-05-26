import { Component } from '@angular/core';

import { TITLE } from './shared/constants/app-consts';
import { IconSerializeService } from './shared/services/icon-serialize.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = TITLE;

  constructor(private iconSerialize: IconSerializeService) {}
}
