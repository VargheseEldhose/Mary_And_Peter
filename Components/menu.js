// Menu.js
import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Button, Menu, Provider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Import the icon library

const MenuExample = () => {
  const [visible, setVisible] = useState(false);

  const closeMenu = () => setVisible(false);
  const openMenu = () => setVisible(true);

  return (
    <Provider>
      <View style={styles.container}>
        {/* Replace the Button with the menu icon */}
        <Icon
          name="menu"
          size={30}
          color="black"
          onPress={openMenu}
          style={styles.menuIcon}
        />
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Button onPress={openMenu} mode="outlined">
              Show menu
            </Button>
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
    padding: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 200,
  },
  menuIcon: {
    position: 'absolute',
    left: 10,
    top: 10,
  },
});

export default MenuExample;
