import { UnavailabilityError } from '@unimodules/core';
import NotificationChannelManager from './NotificationChannelManager';
export default async function updateNotificationChannelAsync(channelId, channel) {
    if (!NotificationChannelManager.updateNotificationChannelAsync) {
        throw new UnavailabilityError('Notifications', 'updateNotificationChannelAsync');
    }
    return await NotificationChannelManager.updateNotificationChannelAsync(channelId, channel);
}
//# sourceMappingURL=updateNotificationChannelAsync.android.js.map