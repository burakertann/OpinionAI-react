import React from 'react';
import { View } from 'react-native';
import PurpleLogoSvg from '../../assets/opinion_purple_logo.svg';

type Props = {
  width?: number;
  height?: number;
};

const PurpleLogo: React.FC<Props> = ({ width = 150, height = 150 }) => {
  return (
    <View style={{ alignItems: 'center', marginTop: 32, marginBottom: 8 }}>
      <PurpleLogoSvg width={width} height={height} />
    </View>
  );
};

export default PurpleLogo;
