import {SafeAreaView, Linking,View,Text,Button} from 'react-native'
import React, {useCallback} from 'react';
import { AntDesign } from '@expo/vector-icons';
import { InstagramEmbed } from 'react-social-media-embed';

const url="https://www.instagram.com/its_me_varghese/"
  
function handlePress(){
    const supported = Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
       Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }

  }
    // Checking if the link is supported for links with custom URL scheme.
   


 


function Footer(){
    return(
        <View style={{alignItems:'center',margin:10}}>
            <Text style={{fontFamily:'serif',fontStyle:'italic', fontSize:20}}>Follow us on Instagram</Text>
  
  <AntDesign name='instagram' size={30} onPress={handlePress}> 

</AntDesign>
        
     
    
        
        </View>
    )
}

export default Footer

