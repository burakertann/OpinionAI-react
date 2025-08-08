// src/screens/TestScreen.tsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MessageInputBar from '../components/common/message_input_bar';
import PrimaryButton from '../components/common/PrimaryButton';


const TestScreen = () => {
  const [message, setMessage] = useState('');

  return (
    <View style={[styles.container]}>
      <MessageInputBar
        value={message}
        onChangeText={setMessage}
        onSend={() => console.log('Gönderildi:', message)}
        onMicPress={() => console.log('Mikrofon')}
        onAddPress={() => console.log('Ekle')}
        style={{ marginTop: 500, alignSelf: 'center', width: '100%' }}
      />
      <PrimaryButton 
      title="Devam Et" 
      onPress={() => console.log('tıklandı')}
      color='primary'
      size='medium' 
      variant='filled'
      fullWidth = {true}
      disabled = {false}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 16,
    backgroundColor: '#0e69c4ff',
  },
});

export default TestScreen;
