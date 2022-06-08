import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BetValidators } from './intefaces/bet-validator';

export interface DialogData {
  bet: string;
  price: string;
  currency: string;
}

@Component({
  selector: 'app-bet-modal',
  templateUrl: './bet-modal.component.html',
  styleUrls: ['./bet-modal.component.scss'],
})
export class BetModalComponent {
  public betForm: FormGroup = new FormGroup({
    bet: new FormControl('', {
      validators: [
        Validators.required,
        Validators.maxLength(9),
        BetValidators.passwordsMatching('', this.data.price),
      ],
      updateOn: 'change',
    }),
  });

  constructor(
    public dialogRef: MatDialogRef<BetModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public get(key: string): FormControl {
    return this.betForm.get(key) as FormControl;
  }
}
