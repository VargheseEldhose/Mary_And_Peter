import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Slider from './Components/slider';
import HomePage from './Pages/HomePage';
import HomeMenu from './Components/menu';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (<SafeAreaView>
    <View>
      <HomeMenu></HomeMenu>
   <HomePage></HomePage>
      <StatusBar style="auto" />
    </View></SafeAreaView>
  );
}


