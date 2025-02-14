import React from 'react';
import { View, Button } from 'react-native';
import { auth } from '../../firebaseConfig'; // Import your authentication module
import styles from '../../styles';

import NavbarTop from '../../Navigation/NavbarTop';
import NavbarBottom from '../../Navigation/NavbarBottom';

const ProfileScreen = ({ navigation }) => {
  const handleSignOut = async () => {
    try {
      await auth.signOut(); // Sign out the user
      navigation.navigate('Login'); // Navigate to Login screen after sign out
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <NavbarTop />
      <View style={styles.settingsContainer}>
        <View style={styles.buttonContainer}>
          <Button title="Logout" onPress={handleSignOut} />
        </View>
      </View>
      <NavbarBottom navigation={navigation} />
    </View>
  );
};

export default ProfileScreen;
