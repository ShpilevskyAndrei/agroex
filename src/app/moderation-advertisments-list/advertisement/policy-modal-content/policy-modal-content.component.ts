import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-policy-modal-content',
  templateUrl: './policy-modal-content.component.html',
  styleUrls: ['./policy-modal-content.component.scss'],
})
export class PolicyModalContentComponent {
  @Output() public moderatorMessage = new EventEmitter<string>();

  public form: FormGroup = new FormGroup({
    moderatorComments: new FormControl('', [Validators.required]),
  });

  constructor(
    public dialogRef: MatDialogRef<PolicyModalContentComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string
  ) {}

  public get(key: string): FormControl {
    return this.form.get(key) as FormControl;
  }
}
