import { NotificationChannelInput } from './NotificationChannelManager';

export default async function createNotificationChannelAsync(
  channelId: string,
  channel: NotificationChannelInput
): Promise<void> {
  console.debug('Notification channels feature is only supported on Android.');
}
