import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class BetValidators {
  public static passwordsMatching(
    actualBet: string,
    totalPrice: string
  ): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const currentBet = control.value;
      return currentBet > actualBet && currentBet < totalPrice
        ? null
        : { inValidBet: true };
    };
  }
}
