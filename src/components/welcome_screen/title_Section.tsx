import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LogoSVG from '../../../assets/welcome_screen_logo.svg'

const TitleSection: React.FC = () => {
  return (
    <View style={styles.container}>
      <LogoSVG width={137.84} height={26.07} style={styles.logo} />

      <Text style={styles.textLight}>Tıpta Güvenilir</Text>
      <Text style={styles.textBold}>İkinci Görüş</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: 'center',
    gap: 8,
  },
  logo: {
    marginBottom: 16,
  },
  textLight: {
    fontSize: 43,
    fontFamily: 'PlusJakartaSans-SemiBold',
    color: '#FFFFFF',
    letterSpacing: -1.5,
    textAlign: 'center',
  },
  textBold: {
    fontSize: 58,
    fontFamily: 'PlusJakartaSans-Bold',
    letterSpacing: -1.8,
    lineHeight: 58,
    textAlign: 'center',
    backgroundColor: 'linear-gradient(90deg, #FFF4D7, #DADEFB 98.29%, #D8FFDC 97.26%)',
    color: '#FFFFFF', // bu sadece fallback
    textShadowColor: '#4E6EC099',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 2,
  },
});

export default TitleSection;
