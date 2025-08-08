import React from 'react';
import { View } from 'react-native';

import InputField from '../signup_page_2/inputField';

import UserIcon from '../../../assets/person_icon.svg';
import PhoneIcon from '../../../assets/mobile_icon.svg';
import MailIcon from '../../../assets/eposta_icon.svg';
import LockIcon from '../../../assets/password_icon.svg';

export default function SignUpInputs() {
  return (
    <View>
      <InputField placeholder="İsim - Soyisim" Icon={UserIcon} />
      <InputField placeholder="Telefon" Icon={PhoneIcon} />
      <InputField placeholder="E-posta" Icon={MailIcon} />
      <InputField placeholder="Şifre" Icon={LockIcon} secureTextEntry />
    </View>
  );
}
