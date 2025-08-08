import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './src/navigation/types'; // yukarıda oluşturduğun dosya

const Stack = createNativeStackNavigator<RootStackParamList>();