// Menu.js
import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Button, Menu, Provider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Import the icon library
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';

import FontAwesome from '@expo/vector-icons/FontAwesome';

const HomeMenu = ({navigation}) => {
  const [visible, setVisible] = useState(false);

  const closeMenu = () => setVisible(false);
  const openMenu = () => {setVisible(true);console.log(2)}

  return (
    <Provider >
      <View style={styles.container}>
      
        
        <Menu style={{}}
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <AntDesign name="menuunfold" onPress={openMenu} size={24} color="black" />
          }
        ><Menu.Item style={styles.menuIcon}
        onPress={() => {
         navigation.navigate('About')
        }}
        title="Save"
      />
         
        </Menu>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
  
    paddingLeft:20,
   
    marginTop:12,
 
   
    
    height: 200,
  },
  menuIcon: {
   
   color:'black',
   backgroundColor:'white',
   borderBlockColor:'grey',
   margin:10

  },
});

export default HomeMenu;
