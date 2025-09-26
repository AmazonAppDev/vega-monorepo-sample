// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { AppRegistry, LogBox } from 'react-native';
import { App } from './src/App';
import { name as appName } from './app.json';

// This command deactivates debug logs and warnings that don't affect core functionality.
// To see console messages, comment out the line below.
LogBox.ignoreAllLogs();

AppRegistry.registerComponent(appName, () => App);
