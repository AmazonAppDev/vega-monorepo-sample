import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {scaleFontSize, scaleWidth, scaleHeight} from '../utils/scaling';
import {BannerLogo} from './BannerLogo';

export interface BannerProps {
  title: string;
  subtitle?: string;
  onPress?: () => void;
  backgroundColor?: string;
  textColor?: string;
  style?: ViewStyle;
  showLogo?: boolean;
}

export const Banner: React.FC<BannerProps> = ({
  title,
  subtitle,
  onPress,
  backgroundColor = '#2196F3',
  textColor = '#FFFFFF',
  style,
  showLogo = true,
}) => {
  const hasLogo = showLogo && BannerLogo !== null;

  const content = (
    <View
      style={[
        styles.container,
        hasLogo && styles.containerWithLogo,
        {backgroundColor},
        style,
      ]}>
      {hasLogo && BannerLogo && <BannerLogo style={styles.logo} />}
      <View
        style={[styles.textContainer, hasLogo && styles.textContainerWithLogo]}>
        <Text style={[styles.title, {color: textColor}]} numberOfLines={1}>
          {title}
        </Text>
        {subtitle && (
          <Text style={[styles.subtitle, {color: textColor}]} numberOfLines={2}>
            {subtitle}
          </Text>
        )}
        <Text style={[styles.subtitle, {color: textColor}]} numberOfLines={2}>
          The current OS is: {Platform.OS}
        </Text>
      </View>
    </View>
  );

  if (onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        hasTVPreferredFocus={false}
        style={styles.touchable}>
        {content}
      </TouchableOpacity>
    );
  }

  return content;
};

const styles = StyleSheet.create({
  touchable: {
    width: '100%',
  },
  container: {
    padding: scaleWidth(24),
    borderRadius: scaleWidth(8),
    minHeight: scaleHeight(120),
    justifyContent: 'center',
    width: '100%',
  },
  containerWithLogo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    height: scaleHeight(80),
    width: scaleHeight(80),
    marginRight: scaleWidth(16),
  },
  textContainer: {
    justifyContent: 'center',
  },
  textContainerWithLogo: {
    flex: 1,
  },
  title: {
    fontSize: scaleFontSize(32),
    fontWeight: 'bold',
    marginBottom: scaleHeight(8),
  },
  subtitle: {
    fontSize: scaleFontSize(24),
    opacity: 0.9,
  },
});
