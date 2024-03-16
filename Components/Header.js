import {SafeAreaView, View,Text} from 'react-native'


function Header(){
    return(
        <SafeAreaView >
            <View>
            <Text style={{fontSize:20,textAlign:'center',fontFamily:'serif',fontStyle:'italic',marginTop:120}}>Mary & Peter Designs</Text>
            </View>
            </SafeAreaView>
        )
}
export default Header