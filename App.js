import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Slider from './Components/slider';
import HomePage from './Pages/HomePage';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>testvhjvvv</Text>
   <HomePage></HomePage>
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
