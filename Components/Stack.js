import { StyleSheet, Text, View,ScrollView } from 'react-native';
import Slider from './Components/slider';
import HomePage from './Pages/HomePage';
import HomeMenu from './Components/menu';
import { SafeAreaView } from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import About from './Pages/AboutPage';
import Footer from './Components/Footer';
import Header from './Components/Header';
import NavBar from './Components/navBar';

function Stack(){ return (
<NavigationContainer>
<Stack.Navigator>
 

<Stack.Screen name="Home" component={HomePage} options={{headerShown:false}}></Stack.Screen>
 


<Stack.Screen name="About"  component={About} options={{headerShown:false}}></Stack.Screen>



</Stack.Navigator>



</NavigationContainer>)}
