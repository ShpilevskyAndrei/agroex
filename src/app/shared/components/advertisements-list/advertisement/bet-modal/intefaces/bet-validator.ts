import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class BetValidators {
  public static checkBetValue(
    actualBet: string,
    totalPrice: string
  ): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const currentBet = control.value;
      return currentBet >= +actualBet + 1 && currentBet <= +totalPrice - 1
        ? null
        : { invalidBet: true };
    };
  }
}
