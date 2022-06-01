import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { IUser } from '../registration-page/interfaces/user-api-response.interface';

interface Location {
  value: string;
  viewValue: string;
}

interface Country {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-advertisement-page',
  templateUrl: './create-advertisement-page.component.html',
  styleUrls: ['./create-advertisement-page.component.scss'],
})
export class CreateAdvertisementPageComponent {
  @Input() public user: IUser | null;

  @Output() public logout: EventEmitter<void> = new EventEmitter<void>();

  public files: File[] = [];

  public countries: Country[] = [
    { value: 'uzbekistan-0', viewValue: 'Uzbekistan' },
  ];

  public locations: Location[] = [
    { value: 'andijan-0', viewValue: 'Andijan Region' },
    { value: 'bukhara-1', viewValue: 'Bukhara Region' },
    { value: 'fergana-2', viewValue: 'Fergana Region' },
    { value: 'jizzakh-3', viewValue: 'Jizzakh Region' },
    { value: 'xorazm-4', viewValue: 'Xorazm Region' },
    { value: 'namangan-5', viewValue: 'Namangan Region' },
    { value: 'navoiy-6', viewValue: 'Navoiy Region' },
    { value: 'qashqadaryo-7', viewValue: 'Qashqadaryo Region' },
    { value: 'samarqand-8', viewValue: 'Samarqand Region' },
    { value: 'sirdaryo-9', viewValue: 'Sirdaryo Region' },
    { value: 'surxondaryo-10', viewValue: 'Surxondaryo Region' },
    { value: 'tashkent-11', viewValue: 'Tashkent Region' },
    { value: 'karakalpakstan-12', viewValue: 'Republic of Karakalpakstan' },
    { value: 'tashkent-14', viewValue: 'Republic of Tashkent city' },
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
    file: new FormControl(''),
  });

  public onLogout(): void {
    this.logout.emit();
  }

  public submitForm(): void {
    console.log(this.advertisementForm.value);
  }

  //@typescript-eslint/no-explicit-any
  public onSelect(event: { addedFiles: File[] }): void {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  public onRemove(event: File): void {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
}
