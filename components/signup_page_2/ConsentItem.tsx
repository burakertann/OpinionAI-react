import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // checkbox için

type Props = {
  label: string; // "KVKK metnini" veya "ETK metnini"
  onPressLink: () => void;
};

const ConsentItem: React.FC<Props> = ({ label, onPressLink }) => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setChecked(!checked)} style={styles.checkbox}>
        {checked && <Ionicons name="checkmark" size={18} color="#68108A" />}
      </TouchableOpacity>

      <Text style={styles.text}>
        <Text style={styles.link} onPress={onPressLink}>{label}</Text> okudum, anladım.
      </Text>
    </View>
  );
};

export default ConsentItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    gap: 8,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    color: '#6B7280', // gri metin
  },
  link: {
    color: '#68108A',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});
