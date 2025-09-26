// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {base, Screen1, Screen2, Screen3, Box} from '@rnmonorepo/shared';

export const App = () => {
  const [currentPage, setCurrentPage] = useState<
    'screen1' | 'screen2' | 'screen3'
  >('screen1');
  const styles = getStyles();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'screen1':
        return <Screen1 />;
      case 'screen2':
        return <Screen2 />;
      case 'screen3':
        return <Screen3 />;
      default:
        return <Screen1 />;
    }
  };

  return (
    <View style={styles.body}>
      <Text style={base.h1}>Hello World! TvOS!</Text>

      <View style={styles.buttonContainer}>
        <Box
          style={styles.button}
          isActive={currentPage === 'screen1'}
          activeStyle={currentPage === 'screen1' ? styles.activeButtonText : ''}
          focusStyle={styles.onFocus}
          pressableStyle={styles.activeButton}
          onPress={() => setCurrentPage('screen1')}>
          <Text>Screen 1</Text>
        </Box>
        <Box
          style={styles.button}
          isActive={currentPage === 'screen2'}
          activeStyle={currentPage === 'screen2' ? styles.activeButtonText : ''}
          focusStyle={styles.onFocus}
          pressableStyle={styles.activeButton}
          onPress={() => setCurrentPage('screen2')}>
          <Text>Screen 2</Text>
        </Box>
        <Box
          style={styles.button}
          isActive={currentPage === 'screen3'}
          activeStyle={currentPage === 'screen3' ? styles.activeButtonText : ''}
          focusStyle={styles.onFocus}
          pressableStyle={styles.activeButton}
          onPress={() => setCurrentPage('screen3')}>
          <Text>Screen 3</Text>
        </Box>
      </View>

      {renderCurrentPage()}
    </View>
  );
};

const getStyles = () =>
  StyleSheet.create({
    body: {
      ...base.body,
      alignItems: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
      marginVertical: 20,
      gap: 10,
    },
    button: {
      maxWidth: 100,
    },
    activeButton: {
      backgroundColor: '#007AFF',
      borderColor: '#0056CC',
    },
    buttonText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#333',
    },
    activeButtonText: {
      color: '#fff',
      backgroundColor: '#007AFF',
      borderColor: '#0056CC',
    },
    onFocus: {
      borderColor: '#007AFF',
      borderWidth: 1,
    },
  });
