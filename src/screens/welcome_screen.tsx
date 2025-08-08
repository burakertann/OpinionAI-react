import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/welcome_screen/header';
import GradientBackground from '../components/background/background';
import TitleSection from '../components/welcome_screen/title_Section';
import FeaturesSVG from '../../assets/non-active_buttons.svg';
import AltbarSVG from '../../assets/alt_bar.svg';
import Input from '../components/common/message_input_bar';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types'; // kendi yoluna göre düzelt

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;


export default function WelcomeScreen() {
  const navigation = useNavigation<NavigationProp>();
  navigation.navigate('SignUp');
  const [message, setMessage] = useState('');
  return (
    
    <GradientBackground>
      <Header onLogin={() => navigation.navigate('SignUp')} />
      <TitleSection />
      <FeaturesSVG width={334} height={100} style={{ alignSelf: 'center', marginTop: 24 }} />
      <Input 
        value={message}
        onChangeText={setMessage}
        onSend={() => console.log('Gönderildi:', message)}
        onMicPress={() => console.log('Mikrofon')}
        onAddPress={() => console.log('Ekle')}
        style={{ marginTop: 250, alignSelf: 'center', width: '100%' }}
      />
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
