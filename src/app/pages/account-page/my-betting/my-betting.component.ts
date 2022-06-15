import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-my-betting',
  templateUrl: './my-betting.component.html',
  styleUrls: ['./my-betting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyBettingComponent {}
