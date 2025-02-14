// SignUpScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from '../styles';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore'; // Import the necessary Firestore functions
import { auth, db } from '../firebaseConfig'; // Make sure db is imported from your firebaseConfig

const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [nickname, setNickname] = useState('');

    const handleSignUp = () => {
        if (password !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match');
            return;
        }
    
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('User account created & signed in!');
                const user = userCredential.user;

                // Correctly reference the Firestore collection and document
                const userRef = doc(db, 'users', user.uid); // Use 'users' collection and user's UID for the document
                setDoc(userRef, {
                    nickname: nickname,
                    email: email // Optionally store other details
                }).then(() => {
                    console.log('User details saved to Firestore');
                }).catch((error) => {
                    console.error("Error saving user details to Firestore", error);
                });

                navigation.navigate('Todo');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }
    
                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }
    
                console.error(error);
            });
    };

    return (
        <View style={styles.loginContainer}>
            <Text style={styles.title}>SignUp</Text>
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
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                placeholderTextColor="#aaa"
                secureTextEntry
                onChangeText={setConfirmPassword}
                value={confirmPassword}
            />
            <TextInput
                style={styles.input}
                placeholder="Nickname"
                placeholderTextColor="#aaa"
                onChangeText={setNickname}
                value={nickname}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleSignUp}
            >
                <Text style={{ color: '#fff' }}>SignUp</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SignUpScreen;
