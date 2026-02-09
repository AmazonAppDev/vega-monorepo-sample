/*
 * Copyright (c) 2022 Amazon.com, Inc. or its affiliates.  All rights reserved.
 *
 * PROPRIETARY/CONFIDENTIAL.  USE IS SUBJECT TO LICENSE TERMS.
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  ScrollView,
} from 'react-native';
import {TopicSelector, Banner, ApiDemo} from '@hellosharedworkspace/shared';

export const App = () => {
  const styles = getStyles();

  return (
    <ImageBackground
      source={require('./assets/background.png')}
      style={styles.background}>
      <ScrollView>
        <Banner
          title="Welcome to Vega"
          subtitle="This component is shared between Android and Vega"
          backgroundColor="#117d15ff"
          onPress={() => console.log('Banner pressed')}
        />
        <TopicSelector />
        <ApiDemo />
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            💡 Edit packages/vega/src/App.tsx to change this screen and then come back to see your
            edits
          </Text>
        </View>
      </ScrollView>
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
    container: {
      flex: 6,
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerContainer: {
      marginLeft: 200,
    },
    headerText: {
      color: 'white',
      fontSize: 80,
      marginBottom: 10,
    },
    subHeaderText: {
      color: 'white',
      fontSize: 40,
    },
    links: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around',
      height: 600,
    },
    image: {
      flex: 1,
      paddingLeft: 150,
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
