import { Component } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { IconSerializeService } from './shared/services/icon-serialize.service';
import { TITLE } from './shared/constants/application-title';
import { APPEARANCE } from './pages/registration-page/constants/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: APPEARANCE,
    }
  ],
})
export class AppComponent {
  public title = TITLE;

  constructor(private iconSerialize: IconSerializeService) {}
}
