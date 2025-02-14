import React from 'react';
import { View, Button } from 'react-native';
import styles from '../styles';

import NavbarTop from '../Navigation/NavbarTop';
import NavbarBottom from '../Navigation/NavbarBottom';

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <NavbarTop />

      <View style={styles.settingsContainer}>

      <View style={styles.buttonContainer}>
          <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Notifications" onPress={() => {}} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Themes" onPress={() => {}} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Donate" onPress={() => {}} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="FAQ" onPress={() => {}} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="About" onPress={() => {}} />
        </View>
      </View>

      <NavbarBottom navigation={navigation} />
    </View>
  );
};

export default SettingsScreen;
