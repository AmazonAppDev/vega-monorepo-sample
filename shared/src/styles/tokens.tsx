// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

const colors = {
  dark: {
    bgprimary: '#1e1e1e',
    bgsecondary: '#333333',
    bgtertiary: '#555555',
    border: '#666666',
    textprimary: '#cccccc',
    anchor: '#01c5c4',
    navbar: '#222222',
    navbartext: '#f1f1f1',

    bgboxinfo: '#193848',
    textboxinfo: '#98b8c7',
    borderboxinfo: '#2c6581',

    bgboxwarn: '#6e572f',
    textboxwarn: '#d0c5b1',
    borderboxwarn: '#967c4f',

    bgboxsuccess: '#244725',
    textboxsuccess: '#b1c8b1',
    borderboxsuccess: '#3c763d',

    bgboxerror: '#441b1a',
    textboxerror: '#ddb4b3',
    borderboxerror: '#873635',
  },
  light: {
    bgprimary: '#FFFFFF',
    bgsecondary: '#F1F1F1',
    bgtertiary: '#eeeeee',
    border: '#cccccc',
    textprimary: '#333333',
    anchor: '#01c5c4',
    navbar: '#222222',
    navbartext: '#f1f1f1',

    bgboxinfo: '#d9edf7',
    textboxinfo: '#31708f',
    borderboxinfo: '#bce8f1',

    bgboxwarn: '#fcf8e3',
    textboxwarn: '#8a6d3b',
    borderboxwarn: '#faebcc',

    bgboxsuccess: '#dff0d8',
    textboxsuccess: '#3c763d',
    borderboxsuccess: '#d6e9c6',

    bgboxerror: '#f2dede',
    textboxerror: '#a94442',
    borderboxerror: '#ebccd1',
  },
};

const font = {
  family: {
    paragraph: 'Amazon Ember',
    headings: 'Amazon Ember',
  },
  size: {
    paragraph: 24,
    h1: 64,
    h2: 44,
    h3: 36,
    h4: 32,
    h5: 22,
    h6: 18,
  },
};

export const getTokens = (appearance: string) => {
  return {
    color: appearance === 'light' ? colors.light : colors.dark,
    font: font,
  };
};
