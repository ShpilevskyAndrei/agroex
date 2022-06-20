import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgroexToastService, ToastType } from 'ngx-agroex-toast';
import { NgxDropzoneChangeEvent } from 'ngx-dropzone';

import { UserPanelOptionId } from '../../shared/components/header/enums/user-panel-option-id';
import { LoadingStatus } from '../../shared/interfaces/loading-status';
import { IUser } from '../../shared/interfaces/user.interface';
import { MAX_FILE_SIZE } from './constant/max-file-sizes';
import {
  REGEXP_FOR_IS_INTEGER_NUMBER,
  REGEXP_FOR_IS_NUMBER,
} from './constant/regexp';
import {
  ICategory,
  ICountry,
  ICurrency,
  ILocation,
  IUnit,
} from './interfaces/create-advertisement.interface';
import { CreateAdvertisementService } from './services/create-advertisement.service';
import { UserRole } from '../../shared/components/header/enums/user-role';

@Component({
  selector: 'app-create-advertisement-page',
  templateUrl: './create-advertisement-page.component.html',
  styleUrls: ['./create-advertisement-page.component.scss'],
})
export class CreateAdvertisementPageComponent implements OnChanges, OnDestroy {
  @Input() public user: IUser | null;
  @Input() public createAdvertisementLoadingStatus: LoadingStatus | null;
  @Input() public userRole: UserRole | null;

  @Output() public logout: EventEmitter<void> = new EventEmitter<void>();
  @Output() public dropLoadingStatus: EventEmitter<void> =
    new EventEmitter<void>();
  @Output()
  public formAdvertisement: EventEmitter<FormData> = new EventEmitter<FormData>();
  @Output() public selectTab: EventEmitter<UserPanelOptionId> =
    new EventEmitter<UserPanelOptionId>();

  public maxFileSize = MAX_FILE_SIZE;

  public files: File[] = [];

  public countries: ICountry[] = this.createAdvertisementService.countries;
  public units: IUnit[] = this.createAdvertisementService.units;
  public locations: ILocation[] = this.createAdvertisementService.locations;
  public currencies: ICurrency[] = this.createAdvertisementService.currencies;
  public categories: ICategory[] = this.createAdvertisementService.categories;

  public advertisementForm: FormGroup = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(40),
    ]),
    country: new FormControl(
      {
        value: this.countries[0].value,
        disabled: true,
      },
      [Validators.required]
    ),
    location: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [
      Validators.required,
      Validators.pattern(REGEXP_FOR_IS_NUMBER),
    ]),
    unit: new FormControl(
      {
        value: this.units[0].value,
        disabled: false,
      },
      [Validators.required]
    ),
    price: new FormControl('', [
      Validators.required,
      Validators.min(2),
      Validators.pattern(REGEXP_FOR_IS_INTEGER_NUMBER),
    ]),
    currency: new FormControl(
      {
        value: this.currencies[0].value,
        disabled: false,
      },
      [Validators.required]
    ),
  });

  constructor(
    private router: Router,
    private createAdvertisementService: CreateAdvertisementService,
    private toastService: AgroexToastService
  ) {}

  public get(key: string): FormControl {
    return this.advertisementForm.get(key) as FormControl;
  }

  public onLogout(): void {
    this.logout.emit();
  }

  public submitForm(): void {
    if (this.files.length < 1) {
      this.toastService.addToast({
        toastType: ToastType.Error,
        title: 'You can add only one image!',
        width: '60vw',
      });
      return;
    }

    const rawValue = this.advertisementForm.getRawValue();
    const formData = new FormData();

    formData.append('files', this.files[0]);
    formData.append('title', rawValue.title);
    formData.append('country', rawValue.country);
    formData.append('location', rawValue.location);
    formData.append('category', rawValue.category);
    formData.append('quantity', rawValue.quantity);
    formData.append('unit', rawValue.unit);
    formData.append('price', rawValue.price);
    formData.append('currency', rawValue.currency);
    this.formAdvertisement.emit(formData);
  }

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

  public onRemove(event: File): void {
    this.files.splice(this.files.indexOf(event), 1);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (
      changes.createAdvertisementLoadingStatus &&
      this.createAdvertisementLoadingStatus?.loaded
    ) {
      this.router.navigate(['']);
    }
  }

  public ngOnDestroy(): void {
    this.dropLoadingStatus.emit();
  }

  public onClickFile(event: MouseEvent): void {
    if (this.files.length) {
      event.preventDefault();
    }
  }

  public onSelectTab(selectedOptionId: UserPanelOptionId): void {
    this.selectTab.emit(selectedOptionId);
  }
}
