/*
 * Copyright (c) 2022 Amazon.com, Inc. or its affiliates.  All rights reserved.
 *
 * PROPRIETARY/CONFIDENTIAL.  USE IS SUBJECT TO LICENSE TERMS.
 */

import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, Platform} from 'react-native';
import {Link} from './Link';
import {scaleFontSize, scaleWidth, scaleHeight} from '../utils/scaling';
import {IconReactNativeAnimated} from './IconReactNativeAnimated';

const images = {
  kepler: require('../assets/kepler.png'),
  learn: require('../assets/learn.png'),
  support: require('../assets/support.png'),
  build: require('../assets/build.png'),
};

export const TopicSelector = () => {
  const [image, setImage] = useState(images.kepler);

  const styles = getStyles();

  return (
    <View style={styles.container}>
      <View style={styles.links}>
        <View style={styles.headerContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.headerText}>Hello {Platform.OS}!</Text>
            <Text style={styles.subHeaderText}>
              Select one of the options below to start your Kepler journey 🚀
            </Text>
          </View>
        </View>
        <Link
          linkText={'Learn'}
          onPress={() => {
            setImage(images.learn);
          }}
          testID="sampleLink"
        />
        <Link
          linkText={'Build'}
          onPress={() => {
            setImage(images.build);
          }}
        />
        <Link
          linkText={'Support'}
          onPress={() => {
            setImage(images.support);
          }}
        />
      </View>
      <View style={styles.image}>
        <IconReactNativeAnimated />
        <Image source={image} style={styles.scaledImage} />
      </View>
    </View>
  );
};

const getStyles = () =>
  StyleSheet.create({
    container: {
      flex: 6,
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerContainer: {
      marginLeft: scaleWidth(200),
      flexDirection: 'row',
      alignItems: 'center',
    },
    textContainer: {
      flex: 1,
    },
    headerText: {
      color: 'white',
      fontSize: scaleFontSize(80),
      marginBottom: scaleHeight(10),
    },
    subHeaderText: {
      color: 'white',
      fontSize: scaleFontSize(40),
    },
    links: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around',
      height: scaleHeight(600),
    },
    image: {
      flex: 1,
      paddingLeft: scaleWidth(150),
      textAlign: 'center',
    },
    scaledImage: {
      // transform: [{scale: getImageScale()}],
      width: 300,
      height: 300,
    },
  });
