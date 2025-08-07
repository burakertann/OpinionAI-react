import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PrimaryButton from './primary_button';
import ChatBubble from '../../assets/chat-bubble.svg';
import Arrow from '../../assets/arrow.svg'; // 👈 Yeni ikon
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

const Header: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      {/* Sol: Chat icon */}
      <ChatBubble width={24} height={24} />

      {/* Orta: Text + ok */}
      <View style={styles.center}>
        <Text style={styles.title}>Chat Opinion</Text>
        <Arrow width={12} height={12} />
      </View>

      {/* Sağ: Giriş Yap butonu */}
      <PrimaryButton label="Giriş Yap" onPress={() => navigation.navigate('SignUp')} />
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
    gap: 4, // Eğer hata verirse marginLeft ver
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
