import {SafeAreaView,View} from 'react-native'
import Slider from '../Components/slider'
import Header from '../Components/Header'

function HomePage({navigation}){
    return(
   <View>
   <View style={{zIndex:99999999}}>
    <Header navigation={navigation}></Header>
    </View>
   
   <View style={{marginTop:30,zIndex:0}}><Slider></Slider></View>
   
 
   </View>      
       
        )

}

export default HomePage