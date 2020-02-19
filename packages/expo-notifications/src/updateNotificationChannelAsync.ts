import { NotificationChannelUpdateInput } from './NotificationChannelManager';

export default async function updateNotificationChannelAsync(
  channelId: string,
  channel: NotificationChannelUpdateInput
): Promise<void> {
  console.debug('Notification channels feature is only supported on Android.');
}
