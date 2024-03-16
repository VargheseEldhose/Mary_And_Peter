import {SafeAreaView, View,Text} from 'react-native'
import HomeMenu from './menu'

function Header(){
    return(
        <SafeAreaView >
            <View>
                
            <Text style={{fontSize:20,textAlign:'center',fontFamily:'serif',fontStyle:'italic',marginTop:12}}>Mary & Peter Designs</Text>
            </View>
            
            </SafeAreaView>
        )
}
export default Header