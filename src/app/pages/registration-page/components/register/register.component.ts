import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { UserService } from '../../user-service/user.service';
import { CustomValidators } from '../../interfaces/custom-validators';
import {
  MIN_USER_NAME_LENGTH,
  MIN_PASSWORD_LENGTH,
} from '../../constants/constants';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public MIN_USER_NAME_LENGTH = MIN_USER_NAME_LENGTH;
  public MIN_PASSWORD_LENGTH = MIN_PASSWORD_LENGTH;
  public loginForm = false;

  public form: FormGroup = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(this.MIN_USER_NAME_LENGTH),
      ]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
        ),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(this.MIN_PASSWORD_LENGTH),
      ]),
      passwordConfirm: new FormControl('', [
        Validators.required,
        Validators.minLength(this.MIN_PASSWORD_LENGTH),
      ]),
      checkBoxConfirm: new FormControl(false, Validators.requiredTrue),
    },
    {
      validators: CustomValidators.passwordsMatching,
    }
  );

  constructor(private userService: UserService, private router: Router) {}

  public get(key: string): FormControl {
    return this.form.get(key) as FormControl;
  }

  public onRegister(): void {
    if (this.form.valid) {
      this.userService
        .create({
          user: {
            username: this.get('username').value,
            email: this.get('email').value,
            password: this.get('password').value,
            phone: this.get('phoneNumber').value,
          },
        })
        .pipe(tap(() => this.router.navigate([''])))
        .subscribe();
    }
  }

  public onLogin(): void {
    console.log(
      `user: {
        email: ${this.get('email').value},
        password: ${this.get('password').value},
      }`
    );
  }

  public switch(): void {
    this.loginForm = this.loginForm === true ? false : true;
  }
}
