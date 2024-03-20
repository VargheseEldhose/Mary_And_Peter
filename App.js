import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Slider from './Components/slider';
import HomePage from './Pages/HomePage';
import HomeMenu from './Components/menu';
import { SafeAreaView } from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import About from './Pages/AboutPage';
import Footer from './Components/Footer';
import Header from './Components/Header';

const Stack = createStackNavigator();

export default function App({navigation}) {
  return (
      <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}> 
     
     <View style={{zIndex:99999999,padding:25}}>
       
        <Header navigation={navigation}></Header>
  
    </View>
 
   <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} options={{headerShown:false}}
        ></Stack.Screen>
        
        
        <Stack.Screen name="About" component={About}></Stack.Screen>
        </Stack.Navigator></NavigationContainer>
        <StatusBar style="auto" backgroundColor='#fff' />

        <Footer></Footer>
     </SafeAreaView>
   
  );
}


