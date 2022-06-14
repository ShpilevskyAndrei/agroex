import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { IAdvertisementInterface } from '../../interfaces/advertisement.interface';

@Component({
  selector: 'app-advertisement-buttons-ad-page',
  templateUrl: './advertisement-buttons-ad-page.component.html',
  styleUrls: ['./advertisement-buttons-ad-page.component.scss'],
})
export class AdvertisementButtonsAdPageComponent {
  @Input() public advertisement: IAdvertisementInterface;
  @Input() public actualCurrency: string | undefined;
  @Input() public newBet: string;
  @Input() public isDisabled = false;
  @Input() public betForm: FormGroup;

  public test(): void {
    console.log(this.newBet);
  }
}