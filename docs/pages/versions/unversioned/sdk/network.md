---
title: Network
---

This module provides useful information about the device's network such as its ip address, mac address and check for airplane mode.

## Installation

This API is pre-installed in [managed](../../introduction/managed-vs-bare/#managed-workflow) apps. To use it in a [bare](../../introduction/managed-vs-bare/#bare-workflow) React Native app, follow its [installation instructions](https://github.com/expo/expo/tree/master/packages/expo-network).

## API

```js
import * as Network from 'expo-network';
```

### Methods

- [`Network.getIpAddressAsync()`](#networkgetipaddressasync)
- [`Network.getMacAddressAsync()`](#networkgetmacaddressasyncinterfacename)
- [`Network.isAirplaneModeEnableAsync()`](#networkisairplanemodeenableasync) (Android only)

### Errors

- [Error Codes](#error-codes)

## Methods

### `Network.getIpAddressAsync()`

Gets the device's current IPv4 address.

#### Returns

A `Promise` that resolves to a `string` of the current IP address of the device's main network interface. Can only be IPv4 address.

**Examples**

```js
await Network.getIpAddressAsync();
// "92.168.32.44"
```

### `Network.getMacAddressAsync(interfaceName)`

Gets the specified network interface's Mac address. On Android, it requires [`android.permission.ACCESS_WIFI_STATE`](https://developer.android.com/reference/android/Manifest.permission#ACCESS_WIFI_STATE) permission to access available network interfaces.

#### Arguments (Android Only)

- **interfaceName (_string_)** -- A string representing interface name (`eth0`, `wlan0`) or `null`, meaning the method should fetch the MAC address of the first available interface. (On iOS this argument is ignored.) If undefined interface name passed in, the method would reject the promise with corresponding message.

#### Returns

A `Promise` that resolves to a `string` of the network adapter MAC address or return `null` if there's no such address matching the interface.

**Examples**

```js
await Network.getMacAddressAsync();
// "E5:12:D8:E5:69:97"
```

### `Network.isAirplaneModeEnableAsync()`

**Android only.** Tells if the device is in airplane mode.

#### Returns

Returns a `Promise` that resolves to the `boolean` value for whether the device is in airplane mode or not.

**Examples**

```js
await Application.isAirplaneModeEnableAsync();
// false
```

## Error Codes

| Code                                    | Description                                                                                                                                                               |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ERR_NETWORK_UNKNOWN_HOST                | Unknown Wifi host when trying to access `WifiManager` in `getIpAddressAsync`                                                                                              |
| ERR_NETWORK_UNDEFINED_INTERFACE         | An undefined `interfaceName` was passed as an argument in `getMacAddressAsync`.                                                                                           |
| ERR_NETWORK_SOCKET_EXCEPTION            | Encounter error in creating or accessing the socket in `getMacAddressAsync`.                                                                                              |
| ERR_NETWORK_INVALID_PERMISSION_INTERNET | No permission of [`android.permission.ACCESS_WIFI_STATE`](https://developer.android.com/reference/android/Manifest.permission#ACCESS_WIFI_STATE) in `getMacAddressAsync`. |