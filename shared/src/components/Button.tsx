// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React, {Ref, useState} from 'react';
import {TouchableOpacity, Text, TouchableOpacityProps, NativeSyntheticEvent, TargetedEvent, StyleProp, ViewStyle, StyleSheet} from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  ref?: Ref<TouchableOpacity>;
  text?: string;
  styleActive?: any;
  onPress?: () => void;
  onFocus?: (e: NativeSyntheticEvent<TargetedEvent>) => void;
  onBlur?: (e: NativeSyntheticEvent<TargetedEvent>) => void;
  onLayout?: (e: NativeSyntheticEvent<TargetedEvent>) => void;
  style?: StyleProp<ViewStyle>;
}

export const Button = (props: ButtonProps) => {
  const [isActive, setIsActive] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const focusHandler = (e: NativeSyntheticEvent<TargetedEvent>) => {
    setIsActive(true);
    props.onFocus?.(e);
    setIsFocused(true);
  };
  const blurHandler = (e: NativeSyntheticEvent<TargetedEvent>) => {
    setIsActive(false);
    props.onBlur?.(e);
    setIsFocused(false);
  };


  return (
    <TouchableOpacity
      ref={props.ref}
      activeOpacity={1}
      onFocus={focusHandler}
      onBlur={blurHandler}
      onPress={props.onPress}
      onLayout={props.onLayout}
      style={{...props.style, ...(isFocused || isActive ? props.styleActive : {})}}>
      <Text
        style={[
          styles.text,
          {
            color: props.styleActive?.color || styles.text.color,
            fontSize: props.styleActive?.fontSize || styles.text.fontSize
          }
        ]}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 16,
  },
});
