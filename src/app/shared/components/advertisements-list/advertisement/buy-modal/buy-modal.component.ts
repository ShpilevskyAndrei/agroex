import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { BuyModalDataInterface } from './interfaces/buy-modal-data.interface';

@Component({
  selector: 'app-buy-modal',
  templateUrl: './buy-modal.component.html',
  styleUrls: ['./buy-modal.component.scss'],
})
export class BuyModalComponent {
  @Output() public setBuy: EventEmitter<Record<string, string>> =
    new EventEmitter<Record<string, string>>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: BuyModalDataInterface,
    private dialogRef: MatDialogRef<BuyModalComponent>
  ) {}

  public onSetBuy(): void {
    this.dialogRef.close(this.data.price);
  }

  public onCloseBuyModal(): void {
    this.dialogRef.close();
  }
}
