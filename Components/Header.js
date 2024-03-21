import {SafeAreaView, View,Text} from 'react-native'
import HomeMenu from './menu'

function Header({navigation}){

  
    return(
        <SafeAreaView >
            <View style={{display:'flex', flexDirection:'row'}}>


              <HomeMenu navigation={navigation} style={{flex:1}}></HomeMenu> 


            <Text style={{flex:2.8,fontSize:20,fontFamily:'serif',fontStyle:'italic',marginTop:10}}>Mary & Peter Designs</Text>
            </View>
            
            </SafeAreaView>
        )
}
export default Header