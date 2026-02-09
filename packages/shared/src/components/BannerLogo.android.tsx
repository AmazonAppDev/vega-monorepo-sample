import React from 'react';
import {Image, ImageStyle} from 'react-native';

export interface BannerLogoProps {
  style?: ImageStyle;
}

export const BannerLogo: React.FC<BannerLogoProps> = ({style}) => {
  return (
    <Image
      source={require('../assets/android-head_3D.png')}
      style={style}
      resizeMode="contain"
    />
  );
};
