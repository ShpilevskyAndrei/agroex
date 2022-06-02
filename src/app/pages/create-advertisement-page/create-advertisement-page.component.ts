import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingStatus } from '../../shared/interfaces/loading-status';

import { IUser } from '../registration-page/interfaces/user-api-response.interface';
import {
  ICategory,
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
  public categories: ICategory[] = this.createAdvertisementService.categories;

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

  public onSelect(event: { addedFiles: File[] }): void {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  public onRemove(event: File): void {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
}
