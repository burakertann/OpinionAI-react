import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing'
import AddIcon from '../../../assets/plus_icon.svg';
import MicIcon from '../../../assets/mic_icon.svg';
import SendIcon from '../../../assets/push_icon.svg';
import { ViewStyle } from 'react-native';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  onSend: () => void;
  onMicPress: () => void;
  onAddPress: () => void;
  style?: ViewStyle;
};

const MessageInputBar: React.FC<Props> = ({
  value,
  onChangeText,
  onSend,
  onMicPress,
  onAddPress,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      {/* Sol: + ikonu */}
      <TouchableOpacity onPress={onAddPress}>
        <AddIcon width={23.7} height={23.7} />
      </TouchableOpacity>

      {/* Ortadaki input */}
      <TextInput
        style={styles.input}
        placeholder="Mesajınızı veya vakayı yazın..."
        placeholderTextColor={colors.text.input_area_text}
        value={value}
        onChangeText={onChangeText}
      />

      {/* Mikrofon ikonu */}
      <TouchableOpacity onPress={onMicPress}>
        <MicIcon width={24} height={24} />
      </TouchableOpacity>

      {/* Gönder ikonu */}
      <TouchableOpacity onPress={onSend} style={styles.sendButton}>
        <SendIcon width={45} height={45} />
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.background,
    borderRadius: 45,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
    alignItems: 'center',
    height: 54,
    justifyContent: 'center',

  },
  input: {
    flex: 1,
    marginHorizontal: spacing.sm,
    fontSize: 16,
    color: colors.text.primary,
  },
  sendButton: {
    backgroundColor: colors.primary,
    padding: 0,
    borderRadius: 999,
    marginLeft: spacing.sm,
  },
});

export default MessageInputBar;