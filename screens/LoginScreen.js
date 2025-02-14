import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from '../styles';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        navigation.navigate('SignUp'); // Navigate to SignUpScreen
    };

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigation.navigate('Todo'); // Navigate to TodoScreen on successful login
            })
            .catch(error => {
                if (error.code === 'auth/user-not-found') {
                    Alert.alert('Error', 'No user found with this email');
                } else if (error.code === 'auth/wrong-password') {
                    Alert.alert('Error', 'Incorrect password');
                } else {
                    Alert.alert('Error', 'Login failed');
                }
            });
    };

    return (
        <View style={styles.loginContainer}>
            <Text style={styles.title}>EireneSync</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#aaa"
                onChangeText={setEmail}
                value={email}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#aaa"
                secureTextEntry
                onChangeText={setPassword}
                value={password}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleLogin}
            >
                <Text style={{ color: '#fff' }}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={handleSignUp}
            >
                <Text style={{ color: '#fff' }}>SignUp</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;
