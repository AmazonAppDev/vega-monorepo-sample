# React Native Monorepo Sample App

The React Native Monorepo Sample App shows you how to create an app that runs on multiple platforms and devices using Yarn workspaces, including the Vega OS Fire TV Stick. The following table shows you what platforms this app is designed to run on.

## Introduction

The React Native Monorepo Sample App runs on the following platforms and devices. 

| Platform | Target Devices |
|----------|------------------|
| **React Native for Vega** | Vega OS Fire TV Stick |
| **React Native Core** | Android and iOS Mobile |
| **React Native for TvOS** | Android TV and Apple TV |
| **React Native for MacOS** | Native MacOS |


###  Prerequisites

Before you launch the sample app, make sure that you have the following installed: 


#### Core requirements
- [Node.js](https://nodejs.org/) (v18 or higher)
- [Yarn](https://yarnpkg.com/) (v4.5.0 or higher)
- [Git](https://git-scm.com/)
- Basic knowledge of [Yarn](https://yarnpkg.com/getting-started) and [Yarn Workspaces](https://yarnpkg.com/features/workspaces)

#### Platform-Specific Requirements

**React Native Core**

* [React Native Environment Setup](https://reactnative.dev/docs/set-up-your-environment)


**React Native for TvOS**

* [React Native TvOS Setup](https://github.com/react-native-tvos/react-native-tvos)

**React Native for Vega**

**Important**: Vega development requires special configuration.

1. [Install the Vega Developer Tools](https://developer.amazon.com/docs/vega/0.21/install-vega-sdk.html).
2. [Configure Yarn](https://developer.amazon.com/docs/vega/0.21/configure-package-managers.html).


## Build and run the app

You can download the source code from GitHub to build and run the sample app for the following platforms and devices.

### Install dependencies

Install all workspace dependencies. Run the following command.

```bash
yarn
```

Install CocoaPods for iOS projects. Run the following command. 

```bash
yarn workspaces foreach --all run pods
```

### Mobile development

#### iOS

To launch the app in an iOS environment, run the following command. 

```bash
yarn workspace @rnmonorepo/mobile run ios
```

#### Android

To launch the app in an Android environment, run the following command. 

```bash
yarn workspace @rnmonorepo/mobile run android
```

### TV development

#### Amazon Vega Virtual Device and Vega OS Fire TV Stick

1. Build the project using the following commands. 

   Production build:

   ```
   yarn workspace @rnmonorepo/vega run build
   ```

   Debug build (recommended for development):
   
   ```
   yarn workspace @rnmonorepo/vega run build:debug
   ```

2. Run the app.

   **Vega Virtual Device**

   1. To start the Vega Virtual Device, at the command prompt, run the following command.

      ```
      kepler device simulator start
      ```

   2. To install and launch the app on the Vega Virtual Device, run the following command, depending on your device architecture.

      - On Mac M-series based devices.   

        ```
        kepler run-kepler vega/build/aarch64-release/vega_aarch64.vpkg
        ```

      - On x86_64 based devices.   

        ```
        kepler run-kepler vega/build/x86_64-release/vega_x86_64.vpkg
        ```
 
   **Vega OS Fire TV Stick**

   1. Turn on your Vega OS Fire TV Stick.

   2. To install and launch the app on your Vega OS Fire TV Stick, run the following command.

      ```
      kepler run-kepler vega/build/armv7-release/vega_armv7.vpkg
      ```

#### Apple TV

To launch the app in an Apple TV environment, run the following command. 

```
yarn workspace @rnmonorepo/tvos run ios --simulator "Apple TV"
```

#### Android TV

1. Start the Android TV emulator using the following command. 

   ```
   emulator -avd android-tv
   ```

2. Run the app using the following command. 

   ```
   yarn workspace @rnmonorepo/tvos run android
   ```

### Set up Fast Refresh for the Vega OS Fire TV Stick or Vega Virtual Device

[Fast Refresh](https://reactnative.dev/docs/fast-refresh) is a React Native function that lets you see changes in your app without rebuilding. To set it up, see [Set Up Fast Refresh to Build Apps Using Vega CLI](https://developer.amazon.com/docs/vega/0.21/fast-refresh.html).


## Set up your environment from scratch

> **Note:** This project is already set up as a complete monorepo. The step-by-step setup instructions below are for reference only.

### Step 1: Create individual projects and a monorepo

The following steps show you how to create separate projects for each platform, and then link them together in a monorepo structure.

#### Mobile project (`./mobile`)

1. To create a React Native mobile project, run the following command. 

   ```
   npx @react-native-community/cli@latest init MonorepoSample --directory mobile
   ```

2. Update your **mobile/package.json** file. 

   ```json
   {
     "name": "@rnmonorepo/mobile",
     "scripts": {
       "clean": "rm -rf android/.gradle android/build android/app/.cxx android/app/build ios/build ios/Pods node_modules",
       "pods": "cd ios && pod install && cd ..",
       // ... existing scripts
     }
   }
   ```

#### TvOS project (`./tvos`)


1. To create a React Native TvOS project, run the following command.

   ```
   npx @react-native-community/cli@latest init MonorepoSample --directory tvos --template @react-native-tvos/template-tv
   ```

2. Update your **tvos/package.json** file. 

   ```json
   {
     "name": "@rnmonorepo/tvos",
     "scripts": {
       "clean": "rm -rf android/.gradle android/build android/app/.cxx android/app/build ios/build ios/Pods node_modules",
       "pods": "cd ios && pod install && cd ..",
       // ... existing scripts
     }
   }
   ```

#### React Native for Vega project (`./vega`)

1. To create your React Native for Vega project using the Vega CLI, run the following command. 

   ```
   kepler project generate --template hello-world --name MonorepoSample --packageId com.amazondeveloper.monoreposample --outputDir vega
   ```

2. Update your **vega/package.json** file. 

   ```json
   {
     "name": "@rnmonorepo/vega"
     // ... existing configuration
   }
   ```

### Step 2: Configure Yarn workspace

1. Create the following **package.json** file at your project root.

   ```json
   {
     "name": "rnmonorepo",
     "packageManager": "yarn@4.5.0",
     "version": "1.0.0",
     "description": "Sample project for React Native monorepo using Yarn workspaces.",
     "license": "ISC",
     "workspaces": [
       "shared",
       "mobile",
       "tvos",
       "vega"
     ]
   }
   ```

2. Create the following **.yarnrc.yml** file at the project root.

   ```yaml
   nodeLinker: node-modules
   nmHoistingLimits: workspaces
   ```

> **Why this configuration?**
> 
> `nmHoistingLimits: workspaces` prevents dependencies from being hoisted to the root, which is crucial for React Native projects that rely on hardcoded paths relative to their project root.

### Step 3: Set up Android Virtual Devices

1. Open **Android Studio**.
2. Go to **AVD Manager** (Virtual Device Manager).
3. Create two virtual devices:
   * **`android-mobile`** - for mobile development
   * **`android-tv`** - for TV development


## Create and configure shared code package

1. To create the React Native shared library, run the following command.

   ```
   npx create-react-native-library@latest shared --local
   ```

2. To configure your shared package, update your **shared/package.json** using the following example.

   ```json
   {
     "peerDependencies": {
       "react": "*",
       "react-native": "*"
     }
   }
   ```

3. To share components for mobile and TV apps, update your package.json file using the following example.

   ```json
   {
     "dependencies": {
       "@rnmonorepo/shared": "*",
       // ... other dependencies
     }
   }
   ```

4. Configure Metro for Vega, Mobile, and TvOS projects. 

   **Vega Project**

   Enhanced Metro configuration for TV development:

   ```javascript
   const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
   const path = require('path');

   const config = {
       watchFolders: [
           path.resolve(__dirname, '../shared'),
       ],
       resolver: {
           unstable_enableSymlinks: true,
           nodeModulesPaths: [
               path.resolve(__dirname, 'node_modules'),
               path.resolve(__dirname, '../node_modules'),
           ],
           extraNodeModules: {
               'react': path.resolve(__dirname, 'node_modules/react'),
               'react-native': path.resolve(__dirname, 'node_modules/react-native'),
               '@babel/runtime': path.resolve(__dirname, 'node_modules/@babel/runtime'),
           },
           resolverMainFields: ['react-native', 'browser', 'main'],
           platforms: ['native', 'ios', 'android', 'tv'],
       },
   };

   module.exports = mergeConfig(getDefaultConfig(__dirname), config);
   ```

   **Mobile and TvOS projects**

   Update your **metro.config.js** file using the following example. 

   ```javascript
   const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
   const path = require('path');

   const config = {
       watchFolders: [
           path.resolve(__dirname, '../shared'),
       ],
       resolver: {
           unstable_enableSymlinks: true,
           extraNodeModules: {
               'react': path.resolve(__dirname, 'node_modules/react'),
               'react-native': path.resolve(__dirname, 'node_modules/react-native'),
               '@babel/runtime': path.resolve(__dirname, 'node_modules/@babel/runtime'),
           },
       },
   };

   module.exports = mergeConfig(getDefaultConfig(__dirname), config);
   ```

### Use Shared Components

The following example shows you how to update your **App.tsx** file to use shared components. 

```typescript
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {base} from '@rnmonorepo/shared';

const App = () => {
  return (
    <View style={localStyles.body}>
      <Text style={base.h1}>Hello World! TvOS!</Text>
    </View>
  );
};

const localStyles = StyleSheet.create({
  body: {
    ...base.body,
    alignItems: 'center',
  },
});

export default App;
```

## Troubleshooting

### Android NDK error

**Error**: `[CXX1101] NDK at $HOME/Library/Android/sdk/ndk/26.1.10909125 did not have a source.properties file`.

**Solution**: Remove empty NDK installation directories from previous installations.

### TvOS Android device issue

**Problem**: `npx react-native run-android` doesn't work with `--device` attribute for TvOS.

**Solution**: Start the emulator explicitly using Android CLI. Run the following command. 

```
emulator -avd <virtual-device-name>
```


### Metro dependency resolution

**Problem**: Metro bundler fails to resolve dependencies in monorepo.

**Solution**: Verify `watchFolders` and `nodeModulesPaths` are correctly configured in your Metro config.

### Vega build issues

**Problem**: Vega builds failing.

**Solution**: Ensure Vega CLI tools are installed and properly configured.

[Vega CLI Installation](https://developer.amazon.com/docs/vega/0.21/install-vega-sdk.html)

### Fast Refresh troubleshooting

**App Changes Not Reflecting**

**Solution**: Verify you're using debug builds.

*  `*_armv7-debug.vpkg` for Fire TV
* `*_x86_64-debug.vpkg` for Intel Mac
* `*_aarch64-debug.vpkg` for M1/M2 Mac

**Metro displays "Pending... Device Connection"**

**Solution**: Check that port forwarding is active and using port 8081.

**App Crashes**

**Solution**: Verify device architecture matches the .VPKG file. Run the following command. 

```
kepler device info
```

## Related topics

* [React Native Documentation](https://reactnative.dev/)
* [React Native TvOS](https://github.com/react-native-tvos/react-native-tvos)
* [Vega TV Developer Portal](https://developer.amazon.com/docs/vega/0.21/vega.html)
* [Yarn Workspaces](https://yarnpkg.com/features/workspaces)


## Release notes

### v0.21

* Initial release.

## License

See [LICENSE](LICENSE) file.