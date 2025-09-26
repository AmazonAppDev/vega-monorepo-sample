const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

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
        resolveRequest: (context, moduleName, platform) => {
            if (process.env.TV === '1') {
                const resolvedPath = path.join(path.dirname(context.originModulePath), context.redirectModulePath(moduleName));
                const resolvedDeviceClassPath = `${resolvedPath}.tv.tsx`;
                const resolvedDeviceClassPathForPlatform = `${resolvedPath}.${platform}.tv.tsx`;
                // First check for the platform + tv path,
                if (context.doesFileExist(resolvedDeviceClassPathForPlatform)) {
                    return {
                        filePath: path.resolve(resolvedDeviceClassPathForPlatform),
                        type: 'sourceFile',
                    };
                }
                // Second, check for tv path
                if (context.doesFileExist(resolvedDeviceClassPath)) {
                    return {
                        filePath: path.resolve(resolvedDeviceClassPath),
                        type: 'sourceFile',
                    };
                }
            }
            // If no matches resolve the default path
            return context.resolveRequest(context, moduleName, platform);
        },
    },
};

module.exports = mergeConfig(getDefaultConfig(
    __dirname),
    wrapWithReanimatedMetroConfig(config)
);
