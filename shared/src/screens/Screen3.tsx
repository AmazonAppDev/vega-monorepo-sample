// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {base} from '../styles';

export const Screen3 = () => {
  return (
    <View style={localStyles.body}>
      <Text style={base.h1}>Screen3 - Default</Text>
    </View>
  );
};

const localStyles = StyleSheet.create({
  body: {
    ...base.body,
    alignItems: 'center',
  },
});

