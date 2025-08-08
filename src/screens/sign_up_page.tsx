import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppStatusBar from '../components/status_bar/statusbar';
import PurpleLogo from '../components/signup_page_2/purple_logo';
import SignUpTitle from '../components/signup_page_2/signUpTitle';
import SignUpInputs from '../components/signup_page_2/SignUpInputs';
import ConsentItem from '../components/signup_page_2/ConsentItem';
import SignUpButton from '../components/signup_page_2/SignUpButton';
import OrDivider from '../components/signup_page_2/OrDivider';
import MembershipButton from '../components/signup_page_2/MembershipButton';

export default function SignUpPage() {
  return (
    <View style={styles.container}>
      <AppStatusBar />

      {/* Üst alan – içerik */}
      <View style={styles.topContent}>
        <PurpleLogo />
        <SignUpTitle />
        <SignUpInputs />
        <View style={styles.consentWrapper}>
          <ConsentItem
            label="KVKK metnini"
            onPressLink={() => console.log('KVKK metni tıklandı')}
          />
          <ConsentItem
            label="ETK metnini"
            onPressLink={() => console.log('ETK metni tıklandı')}
          />
        </View>
      </View>

      {/* Alt alan – her zaman ekranda */}
      <View style={styles.bottomContent}>
        <SignUpButton  
        onPress={() => console.log('Kayıt olundu')}
        style={{ marginBottom: -10 }} 
        />
        <OrDivider />
        <Text style={styles.loginText}>
          Zaten bir hesabınız var mı?{' '}
          <Text style={styles.loginLink}>Giriş Yapın</Text>
        </Text>
        <MembershipButton onPress={() => console.log('Üyelik planlarına göz at')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 20,
  },
  topContent: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  bottomContent: {
     marginBottom: -5,
  },
  buttonContent:{
     marginBottom: -5,
  },
  consentWrapper: {
    marginTop: 16,
    marginBottom: 24,
  },
  loginText: {
    textAlign: 'center',
    marginVertical: 16,
    marginBottom: 5,
  },
  loginLink: {
    color: '#68108A',
    fontWeight: 'bold',
  },
});
