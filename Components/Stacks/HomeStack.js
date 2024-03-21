

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from '../../Pages/HomePage';

const Stack = createStackNavigator();

function HomeStack()
{
     return (

<Stack.Navigator>
 

<Stack.Screen name="HomeStack" component={HomePage} options={{headerShown:false}}></Stack.Screen>
 




</Stack.Navigator>



)}

export default HomeStack
