import { AndroidImportance } from './NotificationPermissionsModule';

export enum AndroidNotificationVisibility {
  PUBLIC = 1,
  PRIVATE = 0,
  SECRET = -1,
}

export enum AndroidAudioContentType {
  UNKNOWN = 0,
  SPEECH = 1,
  MUSIC = 2,
  MOVIE = 3,
  SONIFICATION = 4,
}

export enum AndroidAudioUsage {
  UNKNOWN = 0,
  MEDIA = 1,
  VOICE_COMMUNICATION = 2,
  VOICE_COMMUNICATION_SIGNALLING = 3,
  ALARM = 4,
  NOTIFICATION = 5,
  NOTIFICATION_RINGTONE = 6,
  NOTIFICATION_COMMUNICATION_REQUEST = 7,
  NOTIFICATION_COMMUNICATION_INSTANT = 8,
  NOTIFICATION_COMMUNICATION_DELAYED = 9,
  NOTIFICATION_EVENT = 10,
  ASSISTANCE_ACCESSIBILITY = 11,
  ASSISTANCE_NAVIGATION_GUIDANCE = 12,
  ASSISTANCE_SONIFICATION = 13,
  GAME = 14,
  VIRTUAL_SOURCE = 15,
  ASSISTANT = 16,
}

export enum AndroidAudioLegacyStreamType {
  VOICE_CALL = 0,
  SYSTEM = 1,
  RING = 2,
  MUSIC = 3,
  ALARM = 4,
  NOTIFICATION = 5,
}

export interface AudioAttributes {
  usage: AndroidAudioUsage;
  contentType: AndroidAudioContentType;
  flags: {
    enforceAudibility: boolean;
    requestHardwareAudioVideoSynchronization: boolean;
  };
}

// We're making inner flags required to set intentionally.
// Not providing `true` for a flag makes it false, it doesn't make sense
// to let it be left undefined.
export type AudioAttributesInput = Partial<AudioAttributes>;

export interface NotificationChannel {
  id: string;
  name: string | null;
  importance: AndroidImportance;
  bypassDnd: boolean;
  description: string | null;
  groupId?: string | null;
  lightColor: string;
  lockscreenVisibility: AndroidNotificationVisibility;
  showBadge: boolean;
  soundUri: string | null;
  audioAttributes: AudioAttributes;
  vibrationPattern: number[] | null;
  enableLights: boolean;
  enableVibrate: boolean;
}

type RequiredBy<T, K extends keyof T> = Partial<Omit<T, K>> & Required<Pick<T, K>>;

export type NotificationChannelInput = RequiredBy<
  Omit<
    NotificationChannel,
    | 'id' // id is handled separately as a function argument
    | 'audioAttributes' // need to make it AudioAttributesInput
  > & { audioAttributes?: AudioAttributesInput },
  'name' | 'importance'
>;
