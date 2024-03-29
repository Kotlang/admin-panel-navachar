/* eslint-disable */

// Copyright 2022-2023 @Kotlang/navachaar-admin-portal authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export function UnixToLocalTime(unixTime: number) {
    const date = new Date(unixTime * 1000);
    const localTime = date.toLocaleString();
    return localTime;
}

