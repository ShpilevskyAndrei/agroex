import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter, tap } from 'rxjs';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NgxDropzoneChangeEvent } from 'ngx-dropzone';
import { AgroexToastService, ToastType } from 'ngx-agroex-toast';

import { PolicyModalContentComponent } from './policy-modal-content/policy-modal-content.component';
import { LoadingStatus } from '../../shared/interfaces/loading-status';
import { AuthorizationCombineInfo } from '../../shared/interfaces/user.interface';
import { CustomValidators } from './interfaces/custom-validators';
import {
  MIN_USER_NAME_LENGTH,
  MIN_PASSWORD_LENGTH,
} from './constants/inputs-length';
import {
  REGEXP_FOR_EMAIL,
  REGEXP_FOR_PHONE,
} from 'src/app/shared/constants/regexp';
import { LabelPositionEnum } from './enums/label-position.enum';
import { MAX_FILE_SIZE } from '../create-advertisement-page/constant/max-file-sizes';

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

  public maxFileSize = MAX_FILE_SIZE;
  public files: File[] = [];

  public labelPositionEnum = LabelPositionEnum;
  public labelPosition: LabelPositionEnum = this.labelPositionEnum.person;

  public form: FormGroup = new FormGroup(
    {
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(REGEXP_FOR_EMAIL),
      ]),
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(this.MIN_USER_NAME_LENGTH),
      ]),
      surname: new FormControl('', [
        Validators.required,
        Validators.minLength(this.MIN_USER_NAME_LENGTH),
      ]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(REGEXP_FOR_PHONE),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(this.MIN_PASSWORD_LENGTH),
      ]),
      passwordConfirm: new FormControl('', [Validators.required]),
      checkBoxConfirm: new FormControl(false, Validators.requiredTrue),
      // companyName: new FormControl('', [
      //   Validators.required,
      //   Validators.minLength(this.MIN_USER_NAME_LENGTH),
      // ]),
      // companyTaxNumber: new FormControl('', [
      //   Validators.required,
      //   Validators.minLength(this.MIN_USER_NAME_LENGTH),
      // ]),
      // bankAccount: new FormControl('', [
      //   Validators.required,
      //   Validators.minLength(this.MIN_USER_NAME_LENGTH),
      // ]),
      // certificate: new FormControl('', Validators.required),
    },
    {
      validators: CustomValidators.passwordsMatching,
    }
  );

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private _formBuilder: FormBuilder,
    private toastService: AgroexToastService
  ) {}

  public onSelect(event: NgxDropzoneChangeEvent): void {
    if (this.files.length) {
      return;
    }

    if (event.rejectedFiles.length) {
      event.rejectedFiles.forEach((el) => {
        this.toastService.addToast({
          toastType: ToastType.Error,
          title: `Import failed due ${el.reason} !`,
          width: '60vw',
        });
      });
    }
    this.files.push(...event.addedFiles);
  }

  public onClickFile(event: MouseEvent): void {
    if (this.files.length) {
      event.preventDefault();
    }
  }

  public onRemove(event: File): void {
    this.files.splice(this.files.indexOf(event), 1);
  }

  public getLabelPosition(label: LabelPositionEnum): void {
    console.log(label);
    this.labelPosition = label;
  }

  public get(key: string): FormControl {
    return this.form.get(key) as FormControl;
  }

  public registrURL(): string {
    if (this.labelPosition === this.labelPositionEnum.person) {
      return 'person';
    } else if (this.labelPosition === this.labelPositionEnum.legalEntity) {
      return 'company';
    } else {
      return '';
    }
  }

  public onRegister(clickEvent: MouseEvent): void {
    clickEvent.preventDefault();
    this.form.markAllAsTouched();

    if (this.form.valid) {
      this.authorizationCombineInfo.emit({
        user: {
          name: this.get('username').value,
          surname: this.get('surname').value,
          email: this.get('email').value,
          password: this.get('password').value,
          phone: this.get('phoneNumber').value,
          type: this.labelPosition,
        },
        url: `signup/${this.registrURL()}`,
      });
    }
  }

  public onLogin(clickEvent: MouseEvent): void {
    clickEvent.preventDefault();
    this.form.markAllAsTouched();

    if (
      this.isLoginForm &&
      this.get('email').valid &&
      this.get('password').valid
    ) {
      this.authorizationCombineInfo.emit({
        user: {
          email: this.get('email').value,
          password: this.get('password').value,
        },
        url: 'login',
      });
    }
  }

  public switchForms(clickEvent: MouseEvent): void {
    clickEvent.preventDefault();

    this.isHidePass = true;
    this.isHidePassConf = true;

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

  public changePaswordVisibility(clickEvent: MouseEvent): void {
    clickEvent.preventDefault();
    this.isHidePass = !this.isHidePass;
  }

  public changePaswordVisibilityConf(clickEvent: MouseEvent): void {
    clickEvent.preventDefault();
    this.isHidePassConf = !this.isHidePassConf;
  }

  public openPolicyModal(): void {
    this.dialog
      .open(PolicyModalContentComponent, {
        autoFocus: false,
        width: '60vw',
      })
      .afterClosed()
      .pipe(
        filter(Boolean),
        tap((): void => {
          this.get('checkBoxConfirm').setValue(true);
        })
      )
      .subscribe();
  }

  public isPasswordsMatching(): boolean {
    return (
      this.get('password').value &&
      this.get('passwordConfirm').value &&
      this.get('password').touched &&
      this.get('passwordConfirm').touched &&
      this.form.hasError('passwordsNotMatching')
    );
  }
}
