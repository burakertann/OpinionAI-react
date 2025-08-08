
import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  View,
} from 'react-native';
import {
  baseButtonStyle,
  variantStyles,
  colorStyles,
  sizeStyles,
  textStyles,
} from '../common/buttonStyles';

// Tip tanımı
interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  variant?: keyof typeof variantStyles;
  color?: keyof typeof colorStyles;
  size?: keyof typeof sizeStyles;
  disabled?: boolean;
  fullWidth?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  onPress,
  variant = 'filled',
  color = 'primary',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        baseButtonStyle,
        variantStyles[variant],
        colorStyles[color],
        sizeStyles[size],
        fullWidth && { width: '100%' },
        disabled && { opacity: 0.5 },
        style,
      ]}
    >
      <Text
        style={[
          textStyles.default,
          color === 'white' && textStyles.primaryText,
          color === 'outlineGray' && textStyles.grayText,
          textStyle,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;