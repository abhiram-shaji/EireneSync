// NavbarBottom.js
import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import styles from '../styles';

// Pass navigation prop to NavbarBottom
const NavbarBottom = ({ navigation }) => {
  return (
    <View style={styles.bottomNavbar}>
      <TouchableOpacity onPress={() => navigation.navigate('Todo')}>
        <Image source={require('../assets/todo-icon.png')} style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Focus')}>
        <Image source={require('../assets/focus-icon.png')} style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Journal')}>
        <Image source={require('../assets/journal-icon.png')} style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Image source={require('../assets/settings-icon.png')} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default NavbarBottom;
