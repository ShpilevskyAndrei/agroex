import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Subscription, tap } from 'rxjs';

import { BetValidators } from './intefaces/bet-validator';
import { BetModalDataInterface } from './intefaces/bet-modal-data.interface';
import { CurrenciesEnum } from './enums/currencies.enum';
import { REGEXP_FOR_IS_INTEGER_NUMBER } from '../../../../constants/regexp';

@UntilDestroy()
@Component({
  selector: 'app-bet-modal',
  templateUrl: './bet-modal.component.html',
  styleUrls: ['./bet-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BetModalComponent implements OnInit {
  public betForm: FormGroup = new FormGroup({
    bet: new FormControl('', {
      validators: [
        Validators.required,
        Validators.maxLength(9),
        Validators.pattern(REGEXP_FOR_IS_INTEGER_NUMBER),
        BetValidators.checkBetValue(
          this.data.actualBet.length ? this.data.actualBet[0].betValue : '0',
          this.data.price
        ),
      ],
      updateOn: 'change',
    }),
  });

  public currenciesEnum = CurrenciesEnum;
  public betValueChangesSubscription: Subscription | undefined;
  public betValue: string | undefined;

  constructor(
    private dialogRef: MatDialogRef<BetModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BetModalDataInterface
  ) {}

  public ngOnInit(): void {
    this.betValueChangesSubscription = this.betForm
      .get('bet')
      ?.valueChanges.pipe(
        tap((result) => {
          this.betValue = result;
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  public onCloseBetModal(): void {
    this.dialogRef.close(this.betForm.get('bet')?.value);
  }

  public onCloseModal(): void {
    this.dialogRef.close();
  }
}
