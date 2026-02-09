import React, {useRef, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import {scaleWidth, scaleHeight} from '../utils/scaling';

export const IconReactNativeAnimated = () => {
  const animationRef = useRef<LottieView>(null);

  useEffect(() => {
    animationRef.current?.play();
  }, []);

  return (
    <LottieView
      ref={animationRef}
      source={require('../assets/Animation-rn-logo.json')}
      style={styles.lottieAnimation}
    />
  );
};

const styles = StyleSheet.create({
  lottieAnimation: {
    width: scaleWidth(300),
    height: scaleHeight(300),
  },
});
