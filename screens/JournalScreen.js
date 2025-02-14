//JournalScreen.js

import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, FlatList, Text } from 'react-native';
import { getFirestore, collection, addDoc, getDocs, query, where, doc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'; // Import FirebaseAuth
import styles from '../styles';

import NavbarTop from '../Navigation/NavbarTop';
import NavbarBottom from '../Navigation/NavbarBottom';

const JournalScreen = ({ navigation }) => {
    const [entry, setEntry] = useState('');
    const [entries, setEntries] = useState([]);

    const db = getFirestore();
    const auth = getAuth();
    const user = auth.currentUser; // Get the currently logged-in user

    const userEntriesCollection = collection(db, 'journalEntries');

    useEffect(() => {
        if (user) {
            const loadEntries = async () => {
                const q = query(userEntriesCollection, where('userId', '==', user.uid)); // Filter entries by user ID
                const querySnapshot = await getDocs(q);
                const loadedEntries = querySnapshot.docs.map(doc => ({
                    key: doc.id,
                    ...doc.data()
                }));
                setEntries(loadedEntries);
            };

            loadEntries();
        }
    }, [user, db]); // Dependency array includes user and db

    const addEntry = async () => {
        if (entry.trim()) {
            const newEntry = {
                text: entry,
                date: new Date().toLocaleDateString(),
                userId: user.uid // Store user ID with entry
            };
            const docRef = await addDoc(userEntriesCollection, newEntry);
            setEntries([{ key: docRef.id, ...newEntry }, ...entries]);
            setEntry('');
        }
    };

    return (
        <View style={styles.container}>
            <NavbarTop />

            <View style={{ flex: 1, width: '100%', marginTop: '30%', paddingHorizontal: 20 }}>
                <TextInput
                    style={styles.textInputJournal}
                    placeholder="What's on your mind?"
                    multiline
                    value={entry}
                    onChangeText={setEntry}
                />
                
                <TouchableOpacity style={styles.button} onPress={addEntry}>
                    <Text style={{ color: styles.button.color }}>Add Entry</Text>
                </TouchableOpacity>

                <FlatList
                    data={entries}
                    renderItem={({ item }) => (
                        <View style={styles.listItemJournal}>
                            <Text style={styles.text}>{item.date}</Text>
                            <Text style={styles.text}>{item.text}</Text>
                        </View>
                    )}
                />
            </View>

            <NavbarBottom navigation={navigation} />
        </View>
    );
};

export default JournalScreen;
