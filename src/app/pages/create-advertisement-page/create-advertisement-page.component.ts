import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { IUser } from '../registration-page/interfaces/user-api-response.interface';
import {
  ICountry,
  ICurrency,
  ILocation,
  IUnit,
} from './interfaces/create-advertisement.interface';

@Component({
  selector: 'app-create-advertisement-page',
  templateUrl: './create-advertisement-page.component.html',
  styleUrls: ['./create-advertisement-page.component.scss'],
})
export class CreateAdvertisementPageComponent {
  @Input() public user: IUser | null;

  @Output() public logout: EventEmitter<void> = new EventEmitter<void>();

  public files: File[] = [];

  public countries: ICountry[] = [
    { value: 'uzbekistan', viewValue: 'Uzbekistan' },
  ];

  public units: IUnit[] = [
    { value: 'ton', viewValue: 'ton' },
    { value: 'kg', viewValue: 'kg' },
    { value: 'pcs', viewValue: 'pcs.' },
  ];

  public currencies: ICurrency[] = [
    { value: 'usd', viewValue: 'USD' },
    { value: 'eur', viewValue: 'EUR' },
    { value: 'uzs', viewValue: 'UZS' },
  ];

  public locations: ILocation[] = [
    { value: 'andijan', viewValue: 'Andijan Region' },
    { value: 'bukhara', viewValue: 'Bukhara Region' },
    { value: 'fergana', viewValue: 'Fergana Region' },
    { value: 'jizzakh', viewValue: 'Jizzakh Region' },
    { value: 'xorazm', viewValue: 'Xorazm Region' },
    { value: 'namangan', viewValue: 'Namangan Region' },
    { value: 'navoiy', viewValue: 'Navoiy Region' },
    { value: 'qashqadaryo', viewValue: 'Qashqadaryo Region' },
    { value: 'samarqand', viewValue: 'Samarqand Region' },
    { value: 'sirdaryo', viewValue: 'Sirdaryo Region' },
    { value: 'surxondaryo', viewValue: 'Surxondaryo Region' },
    { value: 'tashkent', viewValue: 'Tashkent Region' },
    { value: 'karakalpakstan', viewValue: 'Republic of Karakalpakstan' },
    { value: 'tashkent', viewValue: 'Tashkent city' },
  ];
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
    unit: new FormControl({ value: this.units[0].value, disabled: false }, [
      Validators.required,
    ]),
    price: new FormControl('', [Validators.required]),
    currency: new FormControl(
      {
        value: this.currencies[0].value,
        disabled: false,
      },
      [Validators.required]
    ),
    file: new FormControl(''),
  });

  public onLogout(): void {
    this.logout.emit();
  }

  public submitForm(): void {
    console.log(this.advertisementForm.value);
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
