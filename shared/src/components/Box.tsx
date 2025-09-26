/* eslint-disable max-lines */
import React, { useCallback } from 'react';
import type { StyleProp, ViewStyle, View } from 'react-native';
import { Platform, TouchableOpacity, StyleSheet } from 'react-native';

// ============= Theme Types & Colors =============
export interface ThemeColors {
  primary: string;
  secondary: string;
  outline: string;
  onPrimary: string;
  inversePrimary: string;
  background: string;
  surface: string;
  error: string;
  onError: string;
  onSurface: string;
  onBackground: string;
}

export const lightPalette: ThemeColors = {
  primary: '#01c5c4',
  secondary: '#F1F1F1',
  outline: '#FFFFFF',
  onPrimary: '#FFFFFF',
  inversePrimary: '#007AFF',
  background: '#FFFFFF',
  surface: '#F8F9FA',
  error: '#DC3545',
  onError: '#FFFFFF',
  onSurface: '#333333',
  onBackground: '#333333',
};

export const darkPalette: ThemeColors = {
  primary: '#01c5c4',
  secondary: '#333333',
  outline: '#1e1e1e',
  onPrimary: '#FFFFFF',
  inversePrimary: '#0056CC',
  background: '#1e1e1e',
  surface: '#2d2d2d',
  error: '#DC3545',
  onError: '#FFFFFF',
  onSurface: '#cccccc',
  onBackground: '#cccccc',
};

// ============= State Types & Hook =============
export const BOX_STATE = {
  DEFAULT: 'default',
  ENABLED: 'enabled',
  ACTIVE: 'active',
  PRESSED: 'pressed',
  DISABLED: 'disabled',
  FOCUSED: 'focused',
} as const;

type BoxState = (typeof BOX_STATE)[keyof typeof BOX_STATE];
type StateMap = Record<BoxState, boolean>;

const DEFAULT_STATE: StateMap = {
  [BOX_STATE.DISABLED]: false,
  [BOX_STATE.ENABLED]: true,
  [BOX_STATE.DEFAULT]: false,
  [BOX_STATE.ACTIVE]: false,
  [BOX_STATE.PRESSED]: false,
  [BOX_STATE.FOCUSED]: false,
};

function useBoxState(initialState = DEFAULT_STATE) {
  const [state, updateState] = React.useState<StateMap>(initialState);

  const setState = React.useCallback(
    (targetState: BoxState, status: boolean) => {
      updateState((prevState: StateMap) => ({
        ...prevState,
        [targetState]: status,
      }));
    },
    [],
  );

  const setActive = React.useCallback((isActive: boolean) => {
    setState(BOX_STATE.ACTIVE, isActive);
  }, [setState]);

  return { state, setState, setActive };
}

// ============= Accessibility Types =============
export type AccessibilityRole =
  | 'none'
  | 'button'
  | 'link'
  | 'search'
  | 'image'
  | 'keyboardkey'
  | 'text'
  | 'adjustable'
  | 'header'
  | 'summary'
  | 'alert'
  | 'checkbox'
  | 'combobox'
  | 'menu'
  | 'menubar'
  | 'menuitem'
  | 'progressbar'
  | 'radio'
  | 'radiogroup'
  | 'scrollbar'
  | 'spinbutton'
  | 'switch'
  | 'tab'
  | 'tablist'
  | 'timer'
  | 'toolbar';

export interface AccessibilityState {
  disabled?: boolean;
  selected?: boolean;
  checked?: boolean | 'mixed';
  busy?: boolean;
  expanded?: boolean;
  pressed?: boolean;
}

export interface AccessibilityValue {
  min?: number;
  max?: number;
  now?: number;
  text?: string;
}

export interface AccessibilityAction {
  name: string;
  label?: string;
}

export interface AccessibilityProps {
  accessible?: boolean;
  accessibilityRole?: AccessibilityRole;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  accessibilityState?: AccessibilityState;
  accessibilityValue?: AccessibilityValue;
  accessibilityActions?: AccessibilityAction[];
  onAccessibilityAction?: (event: {
    nativeEvent: { actionName: string };
  }) => void;
  accessibilityElementsHidden?: boolean;
  accessibilityViewIsModal?: boolean;
  accessibilityLiveRegion?: 'none' | 'polite' | 'assertive';
  importantForAccessibility?: 'auto' | 'yes' | 'no' | 'no-hide-descendants';
  accessibilityLanguage?: string;
  accessibilityIgnoresInvertColors?: boolean;
}

// ============= Theme Types =============
export type BoxVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'outlined'
  | 'ghost';
export type BoxSize = 'sm' | 'md' | 'lg';

export interface BoxTheme {
  variants: Record<BoxVariant, ViewStyle>;
  sizes: Record<BoxSize, ViewStyle>;
  focused: ViewStyle;
  pressed: ViewStyle;
  active: ViewStyle;
  disabled: ViewStyle;
}

// ============= Box Component Types =============
const isTV = Platform.isTV && Platform.OS !== 'tvos';

interface TVProps {
  hasTVPreferredFocus?: boolean;
  isTVSelectable?: boolean;
  nextFocusDown?: number;
  nextFocusUp?: number;
  nextFocusLeft?: number;
  nextFocusRight?: number;
}

interface BaseBoxProps extends AccessibilityProps, TVProps {
  children?: React.ReactNode;
  variant?: BoxVariant;
  size?: BoxSize;
  focusable?: boolean;
  disabled?: boolean;
  isActive?: boolean;
  style?: StyleProp<ViewStyle>;
  focusStyle?: StyleProp<ViewStyle>;
  pressableStyle?: StyleProp<ViewStyle>;
  activeStyle?: StyleProp<ViewStyle>;
  _activeOpacity?: number;
  testID?: string;
  elevation?: number;
  onFocus?: (event?: React.FocusEvent<View>) => void;
  onBlur?: (event?: React.FocusEvent<View>) => void;
  onActiveChange?: (isActive: boolean) => void;
}

interface BoxWithPressProps extends BaseBoxProps {
  onPress: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  onLongPress?: () => void;
  toggleActiveOnPress?: boolean;
}

type BoxProps = BaseBoxProps & Partial<BoxWithPressProps> & TVProps;

// ============= Theme Hook =============
const useThemedStyles = (styleFactory: ({ colors }: { colors: ThemeColors }) => any) => {
  // For now, we'll use light theme by default
  // In a real app, you'd get this from a theme context
  const colors = lightPalette;
  return styleFactory({ colors });
};

// ============= Box Component =============
export const Box = React.forwardRef<TouchableOpacity, BoxProps>(
  (
    {
      children,
      variant = 'default',
      size = 'md',
      focusable = true,
      disabled = false,
      isActive = false,
      style,
      focusStyle,
      pressableStyle,
      activeStyle,
      _activeOpacity,
      testID,
      elevation,
      onFocus,
      onBlur,
      onActiveChange,
      toggleActiveOnPress,
      ...rest
    }: BoxProps,
    ref: React.Ref<TouchableOpacity>,
  ) => {
    const styles = useThemedStyles(getBoxStyles);

    const { state, setState, setActive } = useBoxState({
      [BOX_STATE.DISABLED]: disabled,
      [BOX_STATE.ENABLED]: !disabled,
      [BOX_STATE.DEFAULT]: false,
      [BOX_STATE.ACTIVE]: isActive,
      [BOX_STATE.PRESSED]: false,
      [BOX_STATE.FOCUSED]: false,
    });

    // Update active state when isActive prop changes
    React.useEffect(() => {
      setActive(isActive);
    }, [isActive, setActive]);

    const accessibilityState = React.useMemo(
      () => ({
        disabled,
        busy: state[BOX_STATE.PRESSED],
        selected: state[BOX_STATE.ACTIVE],
      }),
      [disabled, state],
    );

    const defaultRole = React.useMemo(() => {
      if ('onPress' in rest) {
        return 'button';
      }
      return 'none';
    }, [rest]);

    const handleFocus = useCallback(() => {
      setState(BOX_STATE.FOCUSED, true);
      onFocus?.();
    }, [onFocus, setState]);

    const handleBlur = useCallback(() => {
      setState(BOX_STATE.FOCUSED, false);
      onBlur?.();
    }, [onBlur, setState]);

    const handlePress = useCallback(() => {
      if (disabled) {
        return;
      }

      setState(BOX_STATE.FOCUSED, false);
      setState(BOX_STATE.PRESSED, true);
      
      // Toggle active state on press if toggleActiveOnPress is true
      if (toggleActiveOnPress) {
        const newActiveState = !state[BOX_STATE.ACTIVE];
        setState(BOX_STATE.ACTIVE, newActiveState);
        onActiveChange?.(newActiveState);
      } else {
        // Keep the active state when pressed
        setState(BOX_STATE.ACTIVE, isActive);
      }

      if ('onPress' in rest && typeof rest.onPress === 'function') {
        rest.onPress();
      }
    }, [disabled, setState, rest, isActive, toggleActiveOnPress, state, onActiveChange]);

    const handlePressIn = useCallback(() => {
      if (!disabled) {
        setState(BOX_STATE.PRESSED, true);
        setState(BOX_STATE.FOCUSED, false);
        // Keep the active state when pressed in
        setState(BOX_STATE.ACTIVE, isActive);
        if ('onPressIn' in rest) {
          rest.onPressIn?.();
        }
      }
    }, [disabled, setState, rest, isActive]);

    const handlePressOut = useCallback(() => {
      if (!disabled) {
        setState(BOX_STATE.PRESSED, false);
        // Keep the active state when pressed out
        setState(BOX_STATE.ACTIVE, isActive);
        if ('onPressOut' in rest) {
          rest.onPressOut?.();
        }
      }
    }, [disabled, setState, rest, isActive]);

    const boxStyle = [
      styles[variant],
      styles[size],
      disabled && styles.disabled,
      state[BOX_STATE.FOCUSED] && styles.focused,
      state[BOX_STATE.PRESSED] && styles.pressed,
      state[BOX_STATE.ACTIVE] && styles.active,
      style,
      state[BOX_STATE.FOCUSED] && focusStyle,
      state[BOX_STATE.PRESSED] && pressableStyle,
      state[BOX_STATE.ACTIVE] && activeStyle,
      Platform.OS === 'android' && {
        elevation: elevation ?? 0,
      },
    ];

    const accessibilityProps: AccessibilityProps = {
      accessible: true,
      accessibilityRole: defaultRole,
      accessibilityState,
      ...rest,
    };

    const tvProps = {
      hasTVPreferredFocus: rest.hasTVPreferredFocus,
      isTVSelectable: rest.isTVSelectable,
      nextFocusDown: rest.nextFocusDown,
      nextFocusUp: rest.nextFocusUp,
      nextFocusLeft: rest.nextFocusLeft,
      nextFocusRight: rest.nextFocusRight,
    };

    if (isTV && focusable && Platform.OS !== 'tvos') {
      return (
        <TouchableOpacity
          ref={ref}
          aria-label={rest.accessibilityLabel}
          {...tvProps}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onPress={disabled ? undefined : handlePress}
          disabled={disabled}
          testID={testID}
          style={boxStyle}
          activeOpacity={_activeOpacity ?? 1}
          {...rest}
        >
          {children}
        </TouchableOpacity>
      );
    }

    if ('onPress' in rest) {
      return (
        <TouchableOpacity
          ref={ref}
          aria-label={rest.accessibilityLabel}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onPress={disabled ? undefined : handlePress}
          disabled={disabled}
          testID={testID}
          style={boxStyle}
          activeOpacity={_activeOpacity ?? 1}
          {...rest}
        >
          {children}
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity
        ref={ref}
        {...accessibilityProps}
        style={boxStyle}
        testID={testID}
        activeOpacity={_activeOpacity ?? 1}
        onFocus={handleFocus}
        onBlur={handleBlur}
        aria-label={rest.accessibilityLabel}
        role={defaultRole}
        {...rest}
      >
        {children}
      </TouchableOpacity>
    );
  },
);

// ============= Styles =============
export const getBoxStyles = ({ colors }: { colors: ThemeColors }) =>
  StyleSheet.create({
    // Variants
    default: {
      elevation: 0,
      backgroundColor: colors.outline,
      width: '100%',
    },
    primary: {
      backgroundColor: colors.primary,
      borderRadius: 8,
      elevation: 4,
    },
    secondary: {
      backgroundColor: colors.secondary,
      borderRadius: 8,
      elevation: 6,
    },
    outlined: {
      borderWidth: 1,
      borderColor: colors.primary,
      borderRadius: 8,
      elevation: 2,
    },
    ghost: {
      elevation: 0,
    },
    // Sizes
    sm: {
      padding: 8,
      borderRadius: 4,
    },
    md: {
      padding: 16,
      borderRadius: 8,
    },
    lg: {
      padding: 24,
      borderRadius: 12,
    },
    // States
    focused: {
      borderColor: colors.onPrimary,
      borderWidth: 3,
      backgroundColor: colors.outline,
    },
    pressed: {
      borderColor: colors.inversePrimary,
      borderWidth: 3,
      backgroundColor: colors.secondary,
    },
    active: {
      borderColor: colors.primary,
      borderWidth: 2,
      backgroundColor: colors.surface,
    },
    disabled: {
      opacity: 0.5,
    },
  });

export const boxTokensLight = getBoxStyles({ colors: lightPalette });
export const boxTokensDark = getBoxStyles({ colors: darkPalette });
export const defaultTheme = boxTokensLight;