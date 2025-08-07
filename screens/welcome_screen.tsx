import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/welcome_screen/header';
import GradientBackground from '../components/background/background';
import TitleSection from '../components/welcome_screen/title_Section';
import FeaturesSVG from '../assets/non-active_buttons.svg';
import AltbarSVG from '../assets/alt_bar.svg';
import Input from '../components/welcome_screen/input_area';



export default function WelcomeScreen() {
  

  return (
    <GradientBackground>
      <Header />
      <TitleSection />
      <FeaturesSVG width={334} height={100} style={{ alignSelf: 'center', marginTop: 24 }} />
      <Input />

      <AltbarSVG
        width="120%"
        height={43}
        style={{
          position: 'absolute',
          bottom: 0,
          alignSelf: 'center',
          marginLeft: -4,
        }}
      />
    </GradientBackground>
  );
}
