// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Screen1, Screen2, Screen3} from '@rnmonorepo/shared';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#F1F1F1',
          tabBarActiveBackgroundColor: '#01c5c4',
          tabBarInactiveTintColor: '#333333',
          tabBarInactiveBackgroundColor: '#FFFFFF',
        }}>
        <Tab.Screen name="Screen1" component={Screen1} />
        <Tab.Screen name="Screen2" component={Screen2} />
        <Tab.Screen name="Screen3" component={Screen3} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
