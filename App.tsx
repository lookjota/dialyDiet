import { StatusBar } from 'expo-status-bar';
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

export default function App() {

  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  })



  return (
    <ThemeProvider theme={theme}>

        
        {fontsLoaded ? (
          <HomeScreen />
        ) : (
          <ActivityIndicator color="#000" size="large" />
        )}
        
        
        <StatusBar style="auto" />
    </ThemeProvider>
  );
}

