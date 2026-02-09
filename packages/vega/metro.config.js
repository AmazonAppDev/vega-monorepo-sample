/*
 * Copyright (c) 2022 Amazon.com, Inc. or its affiliates.  All rights reserved.
 *
 * PROPRIETARY/CONFIDENTIAL.  USE IS SUBJECT TO LICENSE TERMS.
 */

const path = require('path');
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const { getMetroTools, getMonorepoRoot } = require("react-native-monorepo-tools");

const projectRoot = __dirname;
const monorepoRoot = getMonorepoRoot();
const metroTools = getMetroTools();

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  watchFolders: metroTools.watchFolders,
  resolver: {
    nodeModulesPaths: [
      path.resolve(projectRoot, 'node_modules'),
      path.resolve(monorepoRoot, 'node_modules'),
    ],
    extraNodeModules: metroTools.extraNodeModules,
    blockList: metroTools.blockList,
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
