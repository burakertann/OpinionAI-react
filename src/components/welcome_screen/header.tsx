import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ChatBubble from '../../../assets/chat-bubble.svg';
import Arrow from '../../../assets/arrow.svg';
import PrimaryButton from '../common/PrimaryButton';

type Props = {
  onLogin: () => void;
};

const Header: React.FC<Props> = ({ onLogin }) => {
  return (
    <View style={styles.container}>
      {/* Sol: Chat icon */}
      <TouchableOpacity onPress={() => console.log("ChatBubble'a tıklandı")}>
        <ChatBubble width={24} height={24} />
      </TouchableOpacity>

      {/* Orta: Text + ok */}
      <View style={styles.center}>
        <Text style={styles.title}>Chat Opinion</Text>
        <TouchableOpacity onPress={() => console.log("Ok'a tıklandı")}>
          <Arrow width={12} height={12} />
        </TouchableOpacity>
      </View>

      {/* Sağ: Giriş Yap butonu */}
      <PrimaryButton 
        title="Giriş Yapın" 
        onPress={onLogin}
        size="tiny"
        color="white"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  center: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
    fontFamily: 'PlusJakartaSans',
    marginRight: 4,
  },
});

export default Header;
