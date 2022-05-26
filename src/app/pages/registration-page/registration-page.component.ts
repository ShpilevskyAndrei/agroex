import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { tap } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PolicyModalContentComponent } from './policy-modal-content/policy-modal-content.component';
import { LoadingStatus } from '../../shared/interfaces/loading-status';
import { AuthorizationCombineInfo } from './interfaces/user-api-response.interface';
import { CustomValidators } from './interfaces/custom-validators';
import {
  MIN_USER_NAME_LENGTH,
  MIN_PASSWORD_LENGTH,
} from './constants/constants';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
})
export class RegistrationPageComponent implements OnChanges {
  @Input() public authorizationLoadingStatus: LoadingStatus | null;

  @Output()
  public authorizationCombineInfo: EventEmitter<AuthorizationCombineInfo> = new EventEmitter<AuthorizationCombineInfo>();

  public MIN_USER_NAME_LENGTH = MIN_USER_NAME_LENGTH;
  public MIN_PASSWORD_LENGTH = MIN_PASSWORD_LENGTH;
  public isLoginForm = true;
  public isHidePass = true;
  public isHidePassConf = true;

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

  constructor(private router: Router, public dialog: MatDialog) {}

  public get(key: string): FormControl {
    return this.form.get(key) as FormControl;
  }

  public onRegister(): void {
    if (this.form.valid) {
      this.authorizationCombineInfo.emit({
        user: {
          username: this.get('username').value,
          email: this.get('email').value,
          password: this.get('password').value,
          phone: this.get('phoneNumber').value,
        },
        url: 'registration',
      });
    }
  }

  public onLogin(): void {
    if (this.isLoginForm) {
      this.authorizationCombineInfo.emit({
        user: {
          email: this.get('email').value,
          password: this.get('password').value,
        },
        url: 'login',
      });
    }
  }

  public switchForms(): void {
    for (let item in this.form.value) {
      this.get(item).setValue('');
    }
    this.form.markAsUntouched();
    this.isLoginForm = !this.isLoginForm;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (
      changes.authorizationLoadingStatus &&
      this.authorizationLoadingStatus?.loaded
    ) {
      this.router.navigate(['']);
    }
  }

  public close(): void {
    this.router.navigate(['']);
  }

  public showHidePass(): void {
    this.isHidePass = !this.isHidePass;
  }

  public showHidePassConf(): void {
    this.isHidePassConf = !this.isHidePassConf;
  }

  public openDialog(): void {
    this.dialog
      .open(PolicyModalContentComponent, {
        autoFocus: false,
      })
      .afterClosed()
      .pipe(
        tap((accepted: boolean): void => {
          if (accepted) {
            this.get('checkBoxConfirm').setValue(true);
          }
        })
      )
      .subscribe();
  }
}
