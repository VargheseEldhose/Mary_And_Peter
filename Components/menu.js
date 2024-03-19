// Menu.js
import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Button, Menu, Provider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Import the icon library
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';

import FontAwesome from '@expo/vector-icons/FontAwesome';

const HomeMenu = () => {
  const [visible, setVisible] = useState(false);

  const closeMenu = () => setVisible(false);
  const openMenu = () => setVisible(true);

  return (
    <Provider>
      <View style={styles.container}>
        {/* Replace the Button with the menu icon */}
        
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <AntDesign name="menuunfold" onPress={openMenu} size={24} color="black" />
          }
        ><Menu.Item
        onPress={() => {
          Alert.alert('Action:', 'Save');
        }}
        title="Save"
      />
          {/* Menu items go here */}
          {/* ... */}
        </Menu>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
  
    paddingLeft:20,
    marginRight:-200000,
    marginTop:12,
    width:100,
    zIndex:9999,
    
    height: 200,
  },
  menuIcon: {
    position: 'absolute',
    left: 10,
    top: 60,
    zIndex:99999
  },
});

export default HomeMenu;
