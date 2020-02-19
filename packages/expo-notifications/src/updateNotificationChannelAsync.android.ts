import { UnavailabilityError } from '@unimodules/core';

import NotificationChannelManager, {
  NotificationChannelUpdateInput,
} from './NotificationChannelManager';

export default async function updateNotificationChannelAsync(
  channelId: string,
  channel: NotificationChannelUpdateInput
): Promise<void> {
  if (!NotificationChannelManager.updateNotificationChannelAsync) {
    throw new UnavailabilityError('Notifications', 'updateNotificationChannelAsync');
  }

  return await NotificationChannelManager.updateNotificationChannelAsync(channelId, channel);
}
