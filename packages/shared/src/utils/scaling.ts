import {Dimensions, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const IMAGE_SCALE_FACTOR = 0.4;
// Base dimensions (design reference)
const BASE_WIDTH = 1920;
const BASE_HEIGHT = 1080;

/**
 * Scale size based on screen width
 */
export const scaleWidth = (size: number): number => {
  return PixelRatio.roundToNearestPixel((SCREEN_WIDTH / BASE_WIDTH) * size);
};

/**
 * Scale size based on screen height
 */
export const scaleHeight = (size: number): number => {
  return PixelRatio.roundToNearestPixel((SCREEN_HEIGHT / BASE_HEIGHT) * size);
};

/**
 * Scale font size
 */
export const scaleFontSize = (size: number): number => {
  return PixelRatio.roundToNearestPixel((SCREEN_WIDTH / BASE_WIDTH) * size);
};

/**
 * Moderate scale - less aggressive scaling for better readability
 */
export const moderateScale = (size: number, factor: number = 0.5): number => {
  return PixelRatio.roundToNearestPixel(
    size + (scaleWidth(size) - size) * factor,
  );
};

/**
 * Get image scale transform for platform-specific sizing
 * Android images render 2x larger, so we scale them down
 */
export const getImageScale = () => {
  return IMAGE_SCALE_FACTOR;
};
