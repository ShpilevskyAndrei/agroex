import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IAdvertisementInterface } from '../../interfaces/advertisement.interface';
import { IUser } from '../../../../interfaces/user.interface';
import { MODERATION_FLAG_CONFIG } from './const/moderation-flag-config';
import { ModerationStatus } from '../../../header/enums/moderation-status';
import { IModerationFlag } from './inerfaces/i-moderation-flag';

@Component({
  selector: 'app-advertisement-title',
  templateUrl: './advertisement-title.component.html',
  styleUrls: ['./advertisement-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvertisementTitleComponent {
  @Input() public advertisement: IAdvertisementInterface;
  @Input() public user: IUser | null;
  @Input() public showOwnerFlag: boolean;
  @Input() public moderationPage: boolean;

  public moderationStatus = ModerationStatus;

  public get getModerationFlagConfig(): IModerationFlag {
    switch (this.advertisement.moderationStatus) {
      case this.moderationStatus.Rejected:
        return {
          flag: MODERATION_FLAG_CONFIG.rejected.flag,
          style: MODERATION_FLAG_CONFIG.rejected.style,
        };
      case this.moderationStatus.Unmoderated:
        return {
          flag: MODERATION_FLAG_CONFIG.onModeration.flag,
          style: MODERATION_FLAG_CONFIG.onModeration.style,
        };
      default:
        return {
          flag: '',
          style: '',
        };
    }
  }
}
