import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-moderation-message-modal',
  templateUrl: 'moderation-message-modal.component.html',
  styleUrls: ['moderation-message-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModerationMessageModalComponent {
  public messageModeratorForm: FormGroup = new FormGroup({
    moderatorComments: new FormControl('', [Validators.required]),
  });

  public get(key: string): FormControl {
    return this.messageModeratorForm.get(key) as FormControl;
  }

  public getModeratorsComment(): string {
    if (this.messageModeratorForm.valid) {
      return this.get('moderatorComments').value;
    } else {
      return '';
    }
  }
}
