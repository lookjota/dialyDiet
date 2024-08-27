import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons'

import { 
  useFonts, 
  NunitoSans_400Regular, 
  NunitoSans_700Bold, 
} from '@expo-google-fonts/nunito-sans';

import { HomeScreen } from '@screens/home/idex';

export default function App() {

  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  })

  return (
    <View style={styles.container}>
      
      {fontsLoaded ? (
        <HomeScreen />
      ) : (
        <ActivityIndicator color="#000" size="large" />
      )}
      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
