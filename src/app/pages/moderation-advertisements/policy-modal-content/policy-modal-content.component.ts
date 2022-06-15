import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-policy-modal-content',
  templateUrl: './policy-modal-content.component.html',
  styleUrls: ['./policy-modal-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PolicyModalContentComponent {
  public form: FormGroup = new FormGroup({
    moderatorComments: new FormControl('', [Validators.required]),
  });

  public get(key: string): FormControl {
    return this.form.get(key) as FormControl;
  }

  public getModeratorsComment(): string {
    if (this.form.valid) {
      return this.get('moderatorComments').value;
    } else {
      return '';
    }
  }
}
