//NavbarTop.js

import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';

const NavbarTop = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
        <TouchableOpacity 
          style={styles.iconLeft}
          onPress={() => navigation.navigate('Lofi')}
        >
            <Image source={require('../assets/lofi-icon.png')} style={styles.icon} />
        </TouchableOpacity>

      <Text style={styles.title}>EireneSync</Text>

        <TouchableOpacity 
          style={styles.iconRight}
          onPress={() => navigation.navigate('Chat')}
        >
            <Image source={require('../assets/chat-icon.png')} style={styles.icon} />
        </TouchableOpacity>
    </View>
  );
};

export default NavbarTop;

