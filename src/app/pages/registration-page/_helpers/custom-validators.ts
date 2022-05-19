import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  public static passwordsMatching(
    control: AbstractControl
  ): ValidationErrors | null {
    const password = control.get('password')?.value;
    const passwordConfirm = control.get('passwordConfirm')?.value;

    if (
      password === passwordConfirm &&
      password !== null &&
      passwordConfirm !== null
    ) {
      return null;
    } else {
      return { passwordsNotMatching: true };
    }
  }

  public static phoneNumberValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    const regExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    // const regExp = '1';
    const phonenumber = control?.value;

    if (phonenumber.match(regExp) !== null && phonenumber !== null) {
      return null;
    } else {
      return { notTrueNumber: true };
    }
  }
}
