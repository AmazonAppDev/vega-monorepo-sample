const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
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
