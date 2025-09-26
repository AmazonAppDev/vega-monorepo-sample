// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');


 /**
+ * Metro configuration
+ * https://facebook.github.io/metro/docs/configuration
  *
+ * @type {import('metro-config').MetroConfig}
  */
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