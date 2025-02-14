// ChatScreen.js

import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import styles from '../styles';
import { app, auth, db } from '../firebaseConfig'; // Adjust the import path as necessary
import { collection, addDoc, query, orderBy, onSnapshot, doc, getDoc } from 'firebase/firestore';

import NavbarTop from '../Navigation/NavbarTop';
import NavbarBottom from '../Navigation/NavbarBottom';

const ChatScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [userNickname, setUserNickname] = useState("Anonymous");
  const messagesCollection = collection(db, "chatMessages");
  const flatListRef = useRef(); // Create a ref for the FlatList

  useEffect(() => {
    // Fetch user's nickname once at the component mount if user is authenticated
    if (auth.currentUser) {
      const fetchUserNickname = async () => {
        const userRef = doc(db, 'users', auth.currentUser.uid);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          setUserNickname(docSnap.data().nickname);
        }
      };
      fetchUserNickname();
    }

    // Listen for real-time updates
    const q = query(messagesCollection, orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const loadedMessages = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMessages(loadedMessages);
    });

    return () => unsubscribe();  // Clean up on unmount
  }, []);

  const sendMessage = async () => {
    if (inputText.trim()) {
      try {
        await addDoc(messagesCollection, {
          text: inputText,
          user: userNickname, // Use nickname instead of email
          timestamp: new Date(), // Firestore will convert this to a Timestamp
          isUser: auth.currentUser ? auth.currentUser.uid : null // Store the user ID for comparison
        });
        setInputText("");  // Clear input after sending
      } catch (error) {
        console.error("Error sending message: ", error);
      }
    }
  };

  const scrollToBottom = () => {
    flatListRef.current.scrollToEnd({ animated: true });
  };

  return (
    <View style={styles.container}>
      <NavbarTop />

      <View style={styles.chatContainer}>
        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={[styles.message, item.user === userNickname ? styles.messageOutgoing : styles.messageIncoming]}>
              <Text style={styles.msgUser}>{item.user}</Text>
              <Text style={styles.messageText}>{item.text}</Text>
              <Text style={styles.timestamp}>{new Date(item.timestamp.seconds * 1000).toLocaleTimeString()}</Text>
            </View>
          )}
          contentContainerStyle={{ paddingBottom: 50 }}
          style={{ marginBottom: 50 }}
          onContentSizeChange={scrollToBottom}
          onLayout={scrollToBottom}
        />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.chatTextInput}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Type a message..."
          />
          <Button title="Send" onPress={sendMessage} />
        </View>
      </View>

      <NavbarBottom navigation={navigation} />
    </View>
  );
};

export default ChatScreen;
