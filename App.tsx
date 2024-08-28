import { StatusBar } from 'react-native';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons'

import { 
  useFonts, 
  NunitoSans_400Regular, 
  NunitoSans_700Bold, 
} from '@expo-google-fonts/nunito-sans';

import { ThemeProvider } from 'styled-components/native'

import { HomeScreen } from '@screens/home/index';
import theme from '@theme';
import { Loading } from '@components/Loading';

export default function App() {

  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  })



  return (
    <ThemeProvider theme={theme}>
        <StatusBar  
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <HomeScreen /> : <Loading  />}
    </ThemeProvider>
  );
}

