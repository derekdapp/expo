import { UnavailabilityError } from '@unimodules/core';

import NotificationChannelManager, { NotificationChannelInput } from './NotificationChannelManager';

export default async function createNotificationChannelAsync(
  channelId: string,
  channel: NotificationChannelInput
): Promise<void> {
  if (!NotificationChannelManager.createNotificationChannelAsync) {
    throw new UnavailabilityError('Notifications', 'createNotificationChannelAsync');
  }

  return await NotificationChannelManager.createNotificationChannelAsync(channelId, channel);
}
