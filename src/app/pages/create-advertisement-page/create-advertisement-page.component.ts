import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingStatus } from '../../shared/interfaces/loading-status';

import { IUser } from '../registration-page/interfaces/user-api-response.interface';
import {
  ICountry,
  ICurrency,
  ILocation,
  IUnit,
} from './interfaces/create-advertisement.interface';
import { CreateAdvertisementService } from './services/create-advertisement.service';

@Component({
  selector: 'app-create-advertisement-page',
  templateUrl: './create-advertisement-page.component.html',
  styleUrls: ['./create-advertisement-page.component.scss'],
})
export class CreateAdvertisementPageComponent {
  @Input() public user: IUser | null;
  @Input() public createAdvertisementLoadingStatus: LoadingStatus | null;

  @Output() public logout: EventEmitter<void> = new EventEmitter<void>();
  @Output()
  public formAdvertisement: EventEmitter<FormData> = new EventEmitter<FormData>();

  public files: File[] = [];

  public countries: ICountry[] = this.createAdvertisementService.countries;
  public units: IUnit[] = this.createAdvertisementService.units;
  public locations: ILocation[] = this.createAdvertisementService.locations;
  public currencies: ICurrency[] = this.createAdvertisementService.currencies;

  public advertisementForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    country: new FormControl(
      {
        value: this.countries[0].value,
        disabled: true,
      },
      [Validators.required]
    ),
    location: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
    unit: new FormControl(
      {
        value: this.units[0].value,
        disabled: false,
      },
      [Validators.required]
    ),
    price: new FormControl('', [Validators.required]),
    currency: new FormControl(
      {
        value: this.currencies[0].value,
        disabled: false,
      },
      [Validators.required]
    ),
  });

  constructor(private createAdvertisementService: CreateAdvertisementService) {}

  public onLogout(): void {
    this.logout.emit();
  }

  public submitForm(): void {
    console.log(this.advertisementForm.value);
    const formData = new FormData();
    formData.append('file', this.files[0]);
    // formData.append('files', {
    //   uri: this.files[0].,
    //   type: values.image.assets[0].type,
    //   name: values.image.assets[0].fileName,
    // });
    formData.append('title', this.advertisementForm.value.country);
    formData.append('country', this.advertisementForm.value.country);
    formData.append('location', this.advertisementForm.value.location);
    formData.append('unit', this.advertisementForm.value.unit);
    formData.append('price', this.advertisementForm.value.price);
    formData.append('currency', this.advertisementForm.value.currency);
    this.formAdvertisement.emit(formData);
  }

  public onSelect(event: { addedFiles: File[] }): void {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  public onRemove(event: File): void {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
}
