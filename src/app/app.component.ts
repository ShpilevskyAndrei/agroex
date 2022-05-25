import { Component } from '@angular/core';

import { IconSerializeService } from './shared/services/icon-serialize.service';
import { TITLE } from './shared/constants/application-title';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = TITLE;

  constructor(private iconSerialize: IconSerializeService) {}
}
