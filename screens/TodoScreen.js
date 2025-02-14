//TdoScreen.js

import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert, BackHandler } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import styles from '../styles';
import { getFirestore, collection, addDoc, getDocs, query, where, doc, deleteDoc, getDoc } from 'firebase/firestore'; // Make sure to import getDoc
import { getAuth } from 'firebase/auth';

import NavbarTop from '../Navigation/NavbarTop';
import NavbarBottom from '../Navigation/NavbarBottom';

const TodoScreen = ({ navigation }) => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [nickname, setNickname] = useState('');

    const db = getFirestore();
    const auth = getAuth();
    const user = auth.currentUser;

    const userTasksCollection = collection(db, 'tasks'); 

    useFocusEffect(
        useCallback(() => {
            const onBackPress = () => {
                if (navigation.isFocused()) {
                    BackHandler.exitApp();
                    return true;
                }
                return false;
            };

            BackHandler.addEventListener('hardwareBackPress', onBackPress);

            return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        }, [navigation])
    );

    useEffect(() => {
        if (user) {
            const fetchUserDetails = async () => {
                const userRef = doc(db, 'users', user.uid);
                const docSnap = await getDoc(userRef); // Correct use of getDoc
                if (docSnap.exists()) {
                    setNickname(docSnap.data().nickname);
                } else {
                    console.log("No such document!");
                }
            };

            fetchUserDetails();

            const loadTasks = async () => {
                const q = query(userTasksCollection, where('userId', '==', user.uid));
                const querySnapshot = await getDocs(q);
                const loadedTasks = querySnapshot.docs.map(doc => ({
                    key: doc.id,
                    text: doc.data().text,
                }));
                setTasks(loadedTasks);
            };

            loadTasks();
        }
    }, [user, db]);

    const addTask = async () => {
        if (task.trim()) {
            const docRef = await addDoc(userTasksCollection, { text: task, userId: user.uid });
            setTasks([...tasks, { key: docRef.id, text: task }]);
            setTask('');
        } else {
            Alert.alert('Error', 'Please enter a task');
        }
    };

    const deleteTask = async (key) => {
        await deleteDoc(doc(db, 'tasks', key));
        setTasks(tasks.filter(task => task.key !== key));
    };

    return (
        <View style={styles.container}>
            <NavbarTop />

            <View style={{ width: '100%', marginTop: '25%', marginBottom: '5%', paddingHorizontal: 20 }}>
                <Text style={styles.title}>Hi, {nickname || "Guest"}</Text>
            </View>

            <View style={{ flex: 1, width: '100%', paddingHorizontal: 20 }}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Add a new task"
                    value={task}
                    onChangeText={setTask}
                />
                
                <TouchableOpacity style={styles.button} onPress={addTask}>
                    <Text style={{ color: styles.button.color }}>Add Task</Text>
                </TouchableOpacity>

                <FlatList
                    data={tasks}
                    renderItem={({ item }) => (
                        <View style={styles.listItem}>
                            <Text style={styles.text}>{item.text}</Text>
                            <TouchableOpacity onPress={() => deleteTask(item.key)}>
                                <Text style={{ color: 'red' }}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>

            <NavbarBottom navigation={navigation} />
        </View>
    );
};

export default TodoScreen;
