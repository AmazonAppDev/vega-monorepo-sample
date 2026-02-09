// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const { getMetroTools, getMonorepoRoot } = require("react-native-monorepo-tools");
const path = require('path');

const projectRoot = __dirname;
const monorepoRoot = getMonorepoRoot();
const metroTools = getMetroTools();

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(projectRoot); // eslint-disable-line no-undef

config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(monorepoRoot, 'node_modules'),
];

// Configure for monorepo - watch the shared workspace
config.watchFolders = metroTools.watchFolders;
config.resolver.extraNodeModules = metroTools.extraNodeModules;
config.resolver.blockList = metroTools.blockList;

// When enabled, the optional code below will allow Metro to resolve
// and bundle source files with TV-specific extensions
// (e.g., *.ios.tv.tsx, *.android.tv.tsx, *.tv.tsx)
//
// Metro will still resolve source files with standard extensions
// as usual if TV-specific files are not found for a module.
//
if (process.env?.EXPO_TV === '1') {
  const originalSourceExts = config.resolver.sourceExts;
  const tvSourceExts = [
    ...originalSourceExts.map((e) => `tv.${e}`),
    ...originalSourceExts,
  ];
  config.resolver.sourceExts = tvSourceExts;
}

module.exports = config;
