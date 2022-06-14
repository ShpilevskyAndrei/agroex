import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-my-advertisements',
  templateUrl: './my-advertisements.component.html',
  styleUrls: ['./my-advertisements.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyAdvertisementsComponent {}
