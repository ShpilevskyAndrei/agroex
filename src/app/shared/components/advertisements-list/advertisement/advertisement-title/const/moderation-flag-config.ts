import { ModerationStatus } from '../../../../header/enums/moderation-status';

export const MODERATION_FLAG_CONFIG = {
  rejected: {
    status: ModerationStatus.Rejected,
    flag: 'Rejected',
    style: 'moderation-flag-rejected',
  },
  onModeration: {
    status: ModerationStatus.Unmoderated,
    flag: 'On moderation',
    style: 'moderation-flag-on-moderation',
  },
};
