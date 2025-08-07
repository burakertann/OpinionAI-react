import React from 'react';
import { View, StyleSheet } from 'react-native';
import GradientSVG from '../../assets/background.svg';
import DecorationSVG from '../../assets/opinion_saydam_logo.svg';

type Props = {
  children: React.ReactNode;
};

const GradientBackground: React.FC<Props> = ({ children }) => {
  return (
    <View style={styles.wrapper}>
      {/* Arka plan SVG */}
      <GradientSVG style={StyleSheet.absoluteFill} width="100%" height="100%" />

      {/* Üst süs SVG */}
      <DecorationSVG
        width={752.83}
        height={569}
        style={styles.decoration}
      />

      {/* İçerik */}
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  decoration: {
    position: 'absolute',
    top: 124,
    left: -249,
    opacity: 1, // Figma'daki %7 opacity
  },
  content: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
});

export default GradientBackground;
