/*
 * Copyright (c) 2022 Amazon.com, Inc. or its affiliates.  All rights reserved.
 *
 * PROPRIETARY/CONFIDENTIAL.  USE IS SUBJECT TO LICENSE TERMS.
 */

import React from 'react';
import {render} from '@testing-library/react-native';
import {HomeScreen} from '../HomeScreen';

jest.mock('../TopicSelector', () => ({
  TopicSelector: () => null,
}));

describe('HomeScreen Component', () => {
  it('should render the home screen', () => {
    const {getByText} = render(<HomeScreen />);
    expect(
      getByText(
        '💡 Edit App.tsx to change this screen and then come back to see your edits',
      ),
    ).toBeTruthy();
  });

  it('should render TopicSelector component', () => {
    const {root} = render(<HomeScreen />);
    expect(root).toBeTruthy();
  });
});
