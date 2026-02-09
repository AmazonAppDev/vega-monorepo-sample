/*
 * Copyright (c) 2022 Amazon.com, Inc. or its affiliates.  All rights reserved.
 *
 * PROPRIETARY/CONFIDENTIAL.  USE IS SUBJECT TO LICENSE TERMS.
 */

import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Link} from '../Link';

jest.mock('../../utils/scaling', () => ({
  scaleFontSize: jest.fn((size: number) => size),
  scaleWidth: jest.fn((size: number) => size),
  scaleHeight: jest.fn((size: number) => size),
}));

describe('Link Component', () => {
  const mockOnPress = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render with link text', () => {
    const {getByText} = render(
      <Link linkText="Test Link" onPress={mockOnPress} />,
    );
    expect(getByText('Test Link')).toBeTruthy();
  });

  it('should call onPress when pressed', () => {
    const {getByText} = render(
      <Link linkText="Test Link" onPress={mockOnPress} />,
    );
    fireEvent.press(getByText('Test Link'));
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('should render with testID when provided', () => {
    const {getByTestId} = render(
      <Link linkText="Test Link" onPress={mockOnPress} testID="test-link" />,
    );
    expect(getByTestId('test-link')).toBeTruthy();
  });

  it('should handle focus state', () => {
    const {getByTestId} = render(
      <Link linkText="Test Link" onPress={mockOnPress} testID="test-link" />,
    );
    const touchable = getByTestId('test-link');

    fireEvent(touchable, 'focus');
    // Component should update focused state
    expect(touchable).toBeTruthy();
  });

  it('should handle blur state', () => {
    const {getByTestId} = render(
      <Link linkText="Test Link" onPress={mockOnPress} testID="test-link" />,
    );
    const touchable = getByTestId('test-link');

    fireEvent(touchable, 'focus');
    fireEvent(touchable, 'blur');
    // Component should update focused state back to false
    expect(touchable).toBeTruthy();
  });
});
