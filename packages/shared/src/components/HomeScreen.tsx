/*
 * Copyright (c) 2022 Amazon.com, Inc. or its affiliates.  All rights reserved.
 *
 * PROPRIETARY/CONFIDENTIAL.  USE IS SUBJECT TO LICENSE TERMS.
 */

import React from 'react';
import {StyleSheet, Text, ImageBackground, View} from 'react-native';
import {TopicSelector} from './TopicSelector';

export const HomeScreen = () => {
  const styles = getStyles();

  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={styles.background}>
      <TopicSelector />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          💡 Edit App.tsx to change this screen and then come back to see your
          edits
        </Text>
      </View>
    </ImageBackground>
  );
};

const getStyles = () =>
  StyleSheet.create({
    background: {
      color: 'white',
      flex: 1,
      flexDirection: 'column',
    },
    textContainer: {
      justifyContent: 'center',
      flex: 1,
      marginLeft: 190,
    },
    text: {
      color: 'white',
      fontSize: 40,
    },
  });
