import { Component } from '@angular/core';
import { TITLE } from './shared/constants/application-title';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = TITLE;
}
