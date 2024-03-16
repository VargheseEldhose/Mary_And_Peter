import {SafeAreaView,View} from 'react-native'
import Slider from '../Components/slider'
import Header from '../Components/Header'

function HomePage(){
    return(
   <View>
   <View style={{}}>
    <Header></Header>
    </View>
   
   <View style={{marginTop:40}}><Slider></Slider></View>
   
 
   </View>      
       
        )

}

export default HomePage