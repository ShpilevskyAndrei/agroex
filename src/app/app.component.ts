import { Component } from '@angular/core';
import { title } from '../shared/constants/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = title;
}
