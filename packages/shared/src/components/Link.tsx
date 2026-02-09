/*
 * Copyright (c) 2022 Amazon.com, Inc. or its affiliates.  All rights reserved.
 *
 * PROPRIETARY/CONFIDENTIAL.  USE IS SUBJECT TO LICENSE TERMS.
 */

import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {scaleFontSize, scaleWidth, scaleHeight} from '../utils/scaling';

interface LinkProps {
  linkText: string;
  onPress: Function;
  testID?: string;
}

export const Link = ({linkText, onPress, testID}: LinkProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <>
      <TouchableOpacity
        style={[styles.linkContainer, focused && styles.focusedContainer]}
        onPress={() => onPress()}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        testID={testID}>
        <View style={styles.linkTextContainer}>
          {focused ? (
            <Image source={require('../assets/focusedStar.png')} />
          ) : (
            <Image source={require('../assets/star.png')} />
          )}
          <Text style={styles.linkText}>{linkText}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  linkContainer: {
    width: scaleWidth(420),
    paddingBottom: scaleHeight(10),
    borderBottomWidth: scaleHeight(5),
    borderBottomColor: 'transparent',
  },
  focusedContainer: {
    borderBottomWidth: scaleHeight(5),
    borderBottomColor: '#ff9900',
  },
  linkTextContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: scaleWidth(200),
    width: scaleWidth(300),
  },
  linkText: {
    color: 'white',
    fontSize: scaleFontSize(45),
    marginLeft: scaleWidth(30),
  },
});
