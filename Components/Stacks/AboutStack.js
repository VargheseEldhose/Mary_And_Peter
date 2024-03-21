

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AboutPage from '../../Pages/AboutPage';

const Stack = createStackNavigator();

function AboutStack()
{
     return (

<Stack.Navigator>
 

<Stack.Screen name="AboutStack" component={AboutPage} options={{headerShown:false}}></Stack.Screen>
 




</Stack.Navigator>



)}

export default AboutStack
