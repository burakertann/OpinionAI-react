import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { SvgProps } from 'react-native-svg'; // ikonları prop olarak almak için

type InputFieldProps = {
  placeholder: string;
  Icon: React.FC<SvgProps>; // örn: import UserIcon from '../../assets/user.svg'
  secureTextEntry?: boolean;
};

export default function InputField({ placeholder, Icon, secureTextEntry = false }: InputFieldProps) {
  return (
    <View style={styles.container}>
      <Icon width={20} height={20} style={styles.icon} />
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor="#A0A3BD"
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#D9DBE9',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 14,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});
