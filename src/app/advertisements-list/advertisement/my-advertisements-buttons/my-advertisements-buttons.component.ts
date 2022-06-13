import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-my-advertisements-buttons',
  templateUrl: './my-advertisements-buttons.component.html',
  styleUrls: ['./my-advertisements-buttons.component.scss'],
})
export class MyAdvertisementsButtonsComponent {
  @Output() public test: EventEmitter<string> = new EventEmitter<string>();

  public onTest(): void {
    this.test.emit('test done');
  }
}
