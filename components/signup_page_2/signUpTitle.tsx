import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function SignUpTitle() {
  return <Text style={styles.title}>Bir Hesap Oluşturun</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: '700', // Veya fontFamily: 'PlusJakartaSans-Bold' (eğer yüklü ise)
    color: '#1B2559',
    textAlign: 'center',
    marginTop: 24, // Logonun altına boşluk
  },
});