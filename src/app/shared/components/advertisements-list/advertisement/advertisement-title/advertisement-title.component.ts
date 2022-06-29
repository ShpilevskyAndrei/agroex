import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { IAdvertisementInterface } from '../../interfaces/advertisement.interface';
import { IUser } from '../../../../interfaces/user.interface';
import { MODERATION_FLAG_CONFIG } from './const/moderation-flag-config';
import { ModerationStatus } from '../../../header/enums/moderation-status';

@Component({
  selector: 'app-advertisement-title',
  templateUrl: './advertisement-title.component.html',
  styleUrls: ['./advertisement-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvertisementTitleComponent implements OnInit {
  @Input() public advertisement: IAdvertisementInterface;
  @Input() public user: IUser | null;
  @Input() public showOwnerFlag: boolean;

  public moderationFlag = {
    flag: '',
    style: '',
  };

  public getModerationFlagConfig = (): Object => {
    switch (this.advertisement.moderationStatus) {
      case ModerationStatus.Rejected:
        return (this.moderationFlag = {
          flag: MODERATION_FLAG_CONFIG.rejected.flag,
          style: MODERATION_FLAG_CONFIG.rejected.style,
        });
      case ModerationStatus.Unmoderated:
        return (this.moderationFlag = {
          flag: MODERATION_FLAG_CONFIG.onModeration.flag,
          style: MODERATION_FLAG_CONFIG.onModeration.style,
        });
      default:
        return (this.moderationFlag = {
          flag: '',
          style: '',
        });
    }
  };

  public ngOnInit(): void {
    this.getModerationFlagConfig();
  }
}
