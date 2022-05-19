import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { UserService } from '../../services/user-service/user.service';
import { CustomValidators } from '../../_helpers/custom-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public minCharForUserName = 4;
  public minCharForPassword = 5;
  public checkBoxConfirm = false;

  public form: FormGroup = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(this.minCharForUserName),
      ]),
      phonenumber: new FormControl('', [
        Validators.required,
        CustomValidators.phoneNumberValidator,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(this.minCharForPassword),
      ]),
      passwordConfirm: new FormControl('', [
        Validators.required,
        Validators.minLength(this.minCharForPassword),
      ]),
    },
    {
      validators: CustomValidators.passwordsMatching,
    }
  );

  constructor(private userService: UserService, private router: Router) {}

  public get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  public get username(): FormControl {
    return this.form.get('username') as FormControl;
  }

  public get phonenumber(): FormControl {
    return this.form.get('phonenumber') as FormControl;
  }

  public get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

  public get passwordConfirm(): FormControl {
    return this.form.get('passwordConfirm') as FormControl;
  }

  public register(): void {
    if (this.form.valid) {
      this.userService
        .create({
          user: {
            username: this.username.value,
            phonenumber: this.phonenumber.value,
            email: this.email.value,
            password: this.password.value,
          },
        })
        .pipe(tap(() => this.router.navigate([''])))
        .subscribe();
    }
    console.log(
      `'user': 
      {
        'username': ${this.username.value},
        'phonenumber': ${this.phonenumber.value},
        'email': ${this.email.value},
        'password' : ${this.password.value}
      }`
    );
  }

  public checkSwitch(): boolean {
    this.checkBoxConfirm = this.checkBoxConfirm == true ? false : true;
    return this.checkBoxConfirm;
  }
}
