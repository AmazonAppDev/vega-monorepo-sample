// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import {StyleSheet} from 'react-native';
import {getTokens} from './tokens';

export const tokens = getTokens('light');

const baseButtonStyle = {
  borderStyle: 'solid',
  borderWidth: 2,
  borderRadius: 8,
  paddingTop: 16,
  paddingRight: 24,
  paddingBottom: 16,
  paddingLeft: 24,
  margin: 20,
  textAlign: 'center',
  fontSize: tokens.font.size.paragraph,
};

const baseTextboxStyle = {
  height: 44,
  width: 200,
  borderWidth: 2,
  padding: 8,
};

export const base = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: tokens.color.bgprimary,
    justifyContent: 'center',
    fontSize: tokens.font.size.paragraph,
    fontFamily: tokens.font.family.paragraph,
  },
  h1: {
    fontSize: tokens.font.size.h1,
    fontWeight: '300',
    color: tokens.color.textprimary,
    marginTop: tokens.font.size.h1 / 2,
    marginBottom: tokens.font.size.h1 / 2,
  },
  h2: {
    fontSize: tokens.font.size.h2,
    fontWeight: '400',
    color: tokens.color.textprimary,
    marginTop: tokens.font.size.h2 / 2,
    marginBottom: tokens.font.size.h2 / 2,
  },
  h3: {
    fontSize: tokens.font.size.h3,
    fontWeight: '700',
    color: tokens.color.textprimary,
    marginTop: tokens.font.size.h3 / 2,
    marginBottom: tokens.font.size.h3 / 2,
  },
  h4: {
    fontSize: tokens.font.size.h4,
    fontWeight: '700',
    color: tokens.color.textprimary,
    marginTop: tokens.font.size.h4 / 2,
    marginBottom: tokens.font.size.h4 / 2,
  },
  h5: {
    fontSize: tokens.font.size.h5,
    fontWeight: '900',
    color: tokens.color.textprimary,
    textTransform: 'uppercase',
    marginTop: tokens.font.size.h5 / 2,
    marginBottom: tokens.font.size.h5 / 2,
  },
  h6: {
    fontSize: tokens.font.size.h6,
    fontWeight: '700',
    color: tokens.color.textprimary,
    textTransform: 'uppercase',
    marginTop: tokens.font.size.h6 / 2,
    marginBottom: tokens.font.size.h6 / 2,
  },
  btn: {
    ...baseButtonStyle,
    backgroundColor: tokens.color.bgtertiary,
    borderColor: tokens.color.border,
    color: tokens.color.textprimary,
  },
  btnactive: {
    ...baseButtonStyle,
    backgroundColor: tokens.color.textprimary,
    borderColor: tokens.color.textprimary,
    color: tokens.color.bgprimary,
  },
  btnprimary: {
    ...baseButtonStyle,
    backgroundColor: tokens.color.anchor,
    borderColor: tokens.color.anchor,
    color: tokens.color.textprimary,
  },
  btnprimaryactive: {
    ...baseButtonStyle,
    backgroundColor: tokens.color.textprimary,
    borderColor: tokens.color.textprimary,
    color: tokens.color.bgprimary,
  },
  drawer: {
    backgroundColor: tokens.color.textprimary,
    width: 320,
    paddingTop: 64,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 64,
  },
  draweritem: {
    borderRadius: 8,
  },
  drawerlabel: {
    fontSize: tokens.font.size.h5,
    fontWeight: '400',
  },
  textbox: {
    ...baseTextboxStyle,
    borderColor: tokens.color.border,
    backgroundColor: tokens.color.bgsecondary,
  },
  textboxactive: {
    ...baseTextboxStyle,
    borderColor: tokens.color.anchor,
    backgroundColor: tokens.color.bgtertiary,
  },
});
