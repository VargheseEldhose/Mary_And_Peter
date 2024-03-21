import {SafeAreaView,View,Text,Platform,ScrollView} from 'react-native'
import Slider from '../Components/slider'
import Header from '../Components/Header'
import { useFonts,DancingScript_400Regular } from '@expo-google-fonts/dancing-script'

function HomePage(){

    let [fontsLoaded, fontError] = useFonts({
        DancingScript_400Regular
      });
    
      if (!fontsLoaded && !fontError) {
        return null;
      }
    return(
   <View>
   
  
   
   <View style={{marginTop:0,zIndex:0}}><Slider></Slider></View>
   
 <Text style={{fontFamily:'DancingScript_400Regular',fontSize:20,margin:30,padding:30,paddingBottom:20,backgroundColor:'white'}}>
    
    Welcome to Mary & Peter Designs! We create custom heirloom dresses 
    and accessories to make your special day memorable! 
    For enquiries please send us an email us at maryandpeterdesigns03@gmail.com 
    we will get back to you in 24 hours. God Bless, Mary
 </Text>

    
   </View>      
       
        )}

export default HomePage