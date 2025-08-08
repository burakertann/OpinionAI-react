import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

export const baseButtonStyle: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
};

export const variantStyles: Record<string, ViewStyle> = {
  filled: {},
  outlined: {
    backgroundColor: 'transparent',
    borderWidth: 1,
  },
  ghost: {
    backgroundColor: 'transparent',
  },
};

export const colorStyles: Record<string, ViewStyle> = {
  primary: {
    backgroundColor: '#68108A',
  },
  white: {
    backgroundColor: colors.white,
    borderColor: colors.primary,
  },
  gray: {
    backgroundColor: '#94A3B8',
  },
  outlineGray: {
    backgroundColor: 'transparent',
    borderColor: '#D0D0D0',
    borderWidth: 1,
  },
};

export const sizeStyles: Record<string, ViewStyle> = {
  tiny: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 7,
    height: 26,
  },
  small: {
    paddingVertical: 11,
    paddingHorizontal: 21,
    borderRadius: 8,
    height: 46,
  },
  medium: {
    padding: 20,
    borderRadius: 14,
    height: 56,
    width: 380,
  },
};

export const textStyles: Record<string, TextStyle> = {
  default: {
    color: colors.white,
    fontSize: typography.body.fontSize,
    fontWeight: 'bold',
  },
  primaryText: {
    color: colors.primary,
    fontSize: typography.buttonText.fontSize,
    fontWeight: '700',
  },
  grayText: {
    color: '#666666',
    fontSize: 14,
    fontWeight: '400',
  },
};
