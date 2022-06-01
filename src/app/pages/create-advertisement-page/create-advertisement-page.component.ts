import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
export class CreateAdvertisementPageComponent implements OnInit {
  @Input() public user: IUser | null;

  @Output() public logout: EventEmitter<void> = new EventEmitter<void>();

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
    file: new FormControl(''),
  });

  constructor(private createAdvertisementService: CreateAdvertisementService) {}

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

  public ngOnInit(): void {
    this.advertisementForm.controls.title.setValue('test');
    this.advertisementForm.get('title');

    console.log(this.advertisementForm.controls.title.value);
    console.log(this.advertisementForm.get('title')?.value);
  }
}
