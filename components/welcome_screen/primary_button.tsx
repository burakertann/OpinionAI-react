import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  label: string;
  onPress: () => void;
};

const PrimaryButton: React.FC<Props> = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 6.17,
    paddingHorizontal: 13.89,
    borderRadius: 6.86,
    alignSelf: 'flex-end' // Header'da sağda dursun diye
  },
  text: {
    color: '#68108A',
    fontSize: 10.8,
    fontWeight: '700',
    lineHeight: 10.8,
    textAlign: 'center',
    fontFamily: 'PlusJakartaSans', // font eklenmişse
  },
});

export default PrimaryButton;
