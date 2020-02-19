import { UnavailabilityError } from '@unimodules/core';
import NotificationChannelManager from './NotificationChannelManager';
export default async function createNotificationChannelAsync(channelId, channel) {
    if (!NotificationChannelManager.createNotificationChannelAsync) {
        throw new UnavailabilityError('Notifications', 'createNotificationChannelAsync');
    }
    return await NotificationChannelManager.createNotificationChannelAsync(channelId, channel);
}
//# sourceMappingURL=createNotificationChannelAsync.android.js.map