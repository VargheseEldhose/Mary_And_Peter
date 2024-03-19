import {SafeAreaView, View,Text} from 'react-native'
import HomeMenu from './menu'

function Header(){
    return(
        <SafeAreaView >
            <View style={{display:'flex', flexDirection:'row'}}>


              <HomeMenu style={{flex:1}}></HomeMenu> 


            <Text style={{flex:2.8,fontSize:20,fontFamily:'serif',fontStyle:'italic',marginTop:10}}>Mary & Peter Designs</Text>
            </View>
            
            </SafeAreaView>
        )
}
export default Header