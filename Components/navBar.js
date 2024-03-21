import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomePage from '../Pages/HomePage';
import About from '../Pages/AboutPage';
const Tab = createBottomTabNavigator();


function NavBar(){
    return(
<Tab.Navigator>
      <Tab.Screen name="Home" component={HomePage} options={{headerShown:false}} />
      <Tab.Screen name="Settings" component={About} options={{headerShown:false}}/>
    </Tab.Navigator>)
}
export default NavBar