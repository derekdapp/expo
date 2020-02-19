import { NativeModulesProxy, ProxyNativeModule } from '@unimodules/core';

import { NotificationChannel, NotificationChannelInput } from './NotificationChannelManager.types';

export { NotificationChannelInput } from './NotificationChannelManager.types';
export type NotificationChannelUpdateInput = Partial<NotificationChannelInput>;

export interface NotificationChannelManager extends ProxyNativeModule {
  getNotificationChannelsAsync: () => Promise<NotificationChannel[]>;
  createNotificationChannelAsync: (
    channelId: string,
    channelConfiguration: NotificationChannelInput
  ) => Promise<void>;
  updateNotificationChannelAsync: (
    channelId: string,
    channelConfiguration: NotificationChannelUpdateInput
  ) => Promise<void>;
  deleteNotificationChannelAsync: (channelId: string) => Promise<void>;
}

export default (NativeModulesProxy.ExpoNotificationChannelManager as any) as NotificationChannelManager;
