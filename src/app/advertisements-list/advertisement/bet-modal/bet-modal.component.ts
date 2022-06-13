import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BetValidators } from './intefaces/bet-validator';
import { BetModalDataInterface } from './intefaces/bet-modal-data.interface';
import { CurrenciesEnum } from './enums/currencies.enum';

@Component({
  selector: 'app-bet-modal',
  templateUrl: './bet-modal.component.html',
  styleUrls: ['./bet-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BetModalComponent {
  public betForm: FormGroup = new FormGroup({
    bet: new FormControl('', {
      validators: [
        Validators.required,
        Validators.maxLength(9),
        BetValidators.checkBetValue(
          this.data.actualBet.length ? this.data.actualBet[0].betValue : '0',
          this.data.price
        ),
      ],
      updateOn: 'change',
    }),
  });

  public currenciesEnum = CurrenciesEnum;

  constructor(
    private dialogRef: MatDialogRef<BetModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BetModalDataInterface
  ) {}

  public onCloseBetModal(): void {
    this.dialogRef.close(this.betForm.get('bet')?.value);
  }
}
