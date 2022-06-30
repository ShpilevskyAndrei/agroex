import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgroexToastService, ToastType } from 'ngx-agroex-toast';
import { NgxDropzoneChangeEvent } from 'ngx-dropzone';
import firebase from 'firebase/compat';
import MessagePayload = firebase.messaging.MessagePayload;

import { LoadingStatus } from '../../shared/interfaces/loading-status';
import { IUser } from '../../shared/interfaces/user.interface';
import { MAX_FILE_SIZE } from './constant/max-file-sizes';
import { PATH_TO_EMPTY_IMAGE } from './constant/empty-image';
import { REGEXP_FOR_IS_NUMBER } from './constant/regexp';
import { REGEXP_FOR_IS_INTEGER_NUMBER } from '../../shared/constants/regexp';
import {
  ICategory,
  ICountry,
  ICurrency,
  ILocation,
  IProductType,
  IUnit,
} from './interfaces/create-advertisement.interface';
import { CreateAdvertisementService } from './services/create-advertisement.service';
import { UserRole } from '../../shared/components/header/enums/user-role';
import { IAdRequestInterface } from '../../shared/components/advertisements-list/interfaces/ad-request.interface';
import * as moment from 'moment';

@Component({
  selector: 'app-create-advertisement-page',
  templateUrl: './create-advertisement-page.component.html',
  styleUrls: ['./create-advertisement-page.component.scss'],
})
export class CreateAdvertisementPageComponent implements OnChanges {
  @Input() public user: IUser | null;
  @Input() public createAdvertisementLoadingStatus: LoadingStatus | null;
  @Input() public notificationMessage: MessagePayload[] | null;
  @Input() public userRole: UserRole | null;
  @Input() public map: GeoJSON.FeatureCollection<GeoJSON.MultiPolygon> | null;

  @Output() public logout: EventEmitter<void> = new EventEmitter<void>();
  @Output() public dropLoadingStatus: EventEmitter<void> =
    new EventEmitter<void>();
  @Output()
  public formAdvertisement: EventEmitter<FormData> = new EventEmitter<FormData>();
  @Output() public selectTab: EventEmitter<string> = new EventEmitter<string>();
  @Output() public addNotificationMessage: EventEmitter<MessagePayload> =
    new EventEmitter<MessagePayload>();
  @Output() public changeNotificationStatus: EventEmitter<MessagePayload> =
    new EventEmitter<MessagePayload>();

  public maxFileSize = MAX_FILE_SIZE;
  public files: File[] = [];
  public dataToPreviewAdvPage: IAdRequestInterface;

  public countries: ICountry[] = this.createAdvertisementService.countries;
  public units: IUnit[] = this.createAdvertisementService.units;
  public locations: ILocation[] = this.createAdvertisementService.locations;
  public currencies: ICurrency[] = this.createAdvertisementService.currencies;
  public categories: ICategory[] = this.createAdvertisementService.categories;
  public navigateToCreateAdvertisementPage = true;
  public productTypes: IProductType[] =
    this.createAdvertisementService.productTypes;

  public advertisementForm: FormGroup = new FormGroup({
    productType: new FormControl('', [Validators.required]),
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
    formData.append('title', rawValue.productType);
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
      this.createAdvertisementLoadingStatus?.loaded &&
      !changes.createAdvertisementLoadingStatus.isFirstChange()
    ) {
      this.router.navigate(['']);
    }
  }

  public onClickFile(event: MouseEvent): void {
    if (this.files.length) {
      event.preventDefault();
    }
  }

  public onSelectTab(selectedOptionId: string): void {
    this.selectTab.emit(selectedOptionId);
  }

  public onAddNotificationMessage(message: MessagePayload): void {
    this.addNotificationMessage.emit(message);
  }

  public onClickNotification(notification: MessagePayload): void {
    this.changeNotificationStatus.emit(notification);
  }

  public goToPreview(clickEvent: MouseEvent): void {
    clickEvent.preventDefault();

    const reader = new FileReader();

    if (!this.files.length) {
      this.dataToPreviewAdvPage =
        this.getDataToPreviewAdvPage(PATH_TO_EMPTY_IMAGE);
      this.navigateToCreateAdvertisementPage = false;

      return;
    }

    reader.readAsDataURL(this.files[0]);
    reader.onload = (): void => {
      this.dataToPreviewAdvPage = this.getDataToPreviewAdvPage(
        `${reader.result}`
      );
      this.navigateToCreateAdvertisementPage = false;
    };
  }

  public goToCreateAdvPage(): void {
    this.navigateToCreateAdvertisementPage = true;
  }

  public getDataToPreviewAdvPage(base64File: string): IAdRequestInterface {
    const rawValue = this.advertisementForm.getRawValue();
    const currentDate = moment().format('YYYY-MM-DD HH:mm');

    return {
      advertisement: {
        id: 0,
        title: rawValue.productType,
        country: rawValue.country,
        location: rawValue.location,
        slug: '',
        category: rawValue.category,
        subCategory: '',
        isModerated: false,
        isActive: false,
        price: rawValue.price,
        currency: rawValue.currency,
        img: base64File,
        quantity: rawValue.quantity,
        unit: rawValue.unit,
        createAt: currentDate,
        updatedAt: currentDate,
        author: {
          id: this.user?.id || 0,
          email: this.user?.email || '',
          username: this.user?.username || '',
          phone: this.user?.phone || '',
          image: this.user?.image || '',
          banned: this.user?.banned || false,
          banReason: this.user?.banReason || '',
        },
        userBets: [
          {
            id: 0,
            user_id: 0,
            advertisement_id: 0,
            created_at: currentDate,
            expireBet: currentDate,
            betValue: '',
            isActive: false,
          },
        ],
      },
    };
  }
}
