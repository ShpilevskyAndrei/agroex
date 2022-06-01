import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { IUser } from '../registration-page/interfaces/user-api-response.interface';

interface Location {
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

  public locations: Location[] = [
    { value: 'minsk-0', viewValue: 'Minsk' },
    { value: 'grodno-1', viewValue: 'Grodno' },
    { value: 'brest-2', viewValue: 'Brest' },
    { value: 'gomel-3', viewValue: 'Gomel' },
    { value: 'mogilev-4', viewValue: 'Mogilev' },
    { value: 'vitebsk-5', viewValue: 'Vitebsk' },
  ];
  public advertisementForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    file: new FormControl('', [Validators.required]),
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
