import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

import { SafeAreaView } from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import AboutStack from './Components/Stacks/AboutStack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './Components/Stacks/HomeStack';


const Tab = createBottomTabNavigator();

export default function App({navigation}) {
  return (
      <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}> 
 
 <NavigationContainer>
 <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} options={{headerShown:false}} />
      <Tab.Screen name="About" component={AboutStack} options={{headerShown:false}}/>
    </Tab.Navigator></NavigationContainer>
   
      
        <StatusBar style="auto" />

       

        
       
     </SafeAreaView>
   
  );
}


