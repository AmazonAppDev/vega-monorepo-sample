/*
 * Copyright (c) 2022 Amazon.com, Inc. or its affiliates.  All rights reserved.
 *
 * PROPRIETARY/CONFIDENTIAL.  USE IS SUBJECT TO LICENSE TERMS.
 */

import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Platform} from 'react-native';
import {TopicSelector} from '../TopicSelector';

jest.mock('../../utils/scaling', () => ({
  scaleFontSize: jest.fn((size: number) => size),
  scaleWidth: jest.fn((size: number) => size),
  scaleHeight: jest.fn((size: number) => size),
}));

jest.mock('../IconReactNativeAnimated', () => ({
  IconReactNativeAnimated: () => null,
}));

describe('TopicSelector Component', () => {
  it('should render header text with platform name', () => {
    const {getByText} = render(<TopicSelector />);
    expect(getByText(`Hello ${Platform.OS}!`)).toBeTruthy();
  });

  it('should render subheader text', () => {
    const {getByText} = render(<TopicSelector />);
    expect(
      getByText(
        'Select one of the options below to start your Kepler journey 🚀',
      ),
    ).toBeTruthy();
  });

  it('should render all link options', () => {
    const {getByText} = render(<TopicSelector />);
    expect(getByText('Learn')).toBeTruthy();
    expect(getByText('Build')).toBeTruthy();
    expect(getByText('Support')).toBeTruthy();
  });

  it('should handle Learn link press', () => {
    const {getByText} = render(<TopicSelector />);
    const learnLink = getByText('Learn');
    fireEvent.press(learnLink);
    // Image state should update (tested via component not crashing)
    expect(learnLink).toBeTruthy();
  });

  it('should handle Build link press', () => {
    const {getByText} = render(<TopicSelector />);
    const buildLink = getByText('Build');
    fireEvent.press(buildLink);
    expect(buildLink).toBeTruthy();
  });

  it('should handle Support link press', () => {
    const {getByText} = render(<TopicSelector />);
    const supportLink = getByText('Support');
    fireEvent.press(supportLink);
    expect(supportLink).toBeTruthy();
  });

  it('should render with testID on sample link', () => {
    const {getByTestId} = render(<TopicSelector />);
    expect(getByTestId('sampleLink')).toBeTruthy();
  });
});
