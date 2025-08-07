import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import SendIcon from '../../assets/push_icon.svg'; // SVG dosyan
import MicIcon from '../../assets/mic_icon.svg';   // Opsiyonel
import PlusIcon from '../../assets/plus_icon.svg'; // Opsiyonel

const handleSend = () => {
  console.log("Tıklanıldı");
};

export default function ChatInput() {
  return (
    <View style={styles.container}>
      {/* Sol ikon */}
      <TouchableOpacity onPress={handleSend}>
        <PlusIcon width={20} height={20} />
      </TouchableOpacity>

      {/* Yazı girişi */}
      <TextInput
        placeholder="Mesajınızı veya vakayı..."
        style={styles.input}
        placeholderTextColor="#888"
      />

      {/* Mikrofon ikonu */}
      <TouchableOpacity style={styles.iconButton} onPress={handleSend}>
        <MicIcon width={20} height={20} />
      </TouchableOpacity>

      {/* Gönderme butonu */}
      <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
        <SendIcon width={30} height={30} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 28,
    paddingHorizontal: 1,
    paddingVertical: 1,
    alignItems: 'center',
    margin: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Android shadow
    transform: [{ translateY: 250 }], // sadece Y ekseninde 20px aşağı kaydırır
  },
  input: {
    flex: 1,
    marginHorizontal: 8,
    fontSize: 16,
  },
  iconButton: {
    marginRight: 8,
  },
  sendButton: {
    backgroundColor: '#68108A',
    borderRadius: 999,
    padding: 8,
  },
});
