import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function OrDivider() {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>YA DA</Text>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 18,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#D9D9D9',
  },
  text: {
    marginHorizontal: 8,
    color: '#7A7A7A',
    fontWeight: '500',
  },
});
