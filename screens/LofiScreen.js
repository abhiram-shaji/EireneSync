//LofiScreen.js

import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import styles from '../styles';

import NavbarTop from '../Navigation/NavbarTop';
import NavbarBottom from '../Navigation/NavbarBottom';

// Import music files
const tracks = {
  "In Dreamland": require('../assets/music/In_Dreamland.mp3'),
  "Purple": require('../assets/music/Purple.mp3'),
  "Dreamy Mode": require('../assets/music/Dreamy_Mode.mp3'),
  "These Days": require('../assets/music/These_Days.mp3'),
  "Loading": require('../assets/music/Loading.mp3'),
  "One Thing": require('../assets/music/One_Thing.mp3'),
  "Wonder cute": require('../assets/music/Wonder.mp3'),
  "2:00 AM": require('../assets/music/2_00_AM.mp3'),
};


const LofiScreen = ({ navigation }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const soundRef = useRef(null);

  const togglePlay = async () => {
    if (!currentTrack) return;

    if (isPlaying) {
      await soundRef.current.pauseAsync();
    } else {
      await soundRef.current.playAsync();
    }

    setIsPlaying(!isPlaying);
  };

  const trackNames = Object.keys(tracks);

  const onTrackPress = async (trackName) => {
    if (soundRef.current) {
      await soundRef.current.stopAsync();
      soundRef.current.unloadAsync();
    }

    const { sound } = await Audio.Sound.createAsync(
      tracks[trackName],
      { shouldPlay: true }
    );

    soundRef.current = sound;
    setCurrentTrack(trackName);
    setIsPlaying(true);
  };

  return (
    <View style={styles.container}>
      <NavbarTop />

      <View style={{ flex: 1 }}>
        <View style={styles.trackListContainer}>
          {trackNames.map((trackName, index) => (
            <TouchableOpacity
              key={index}
              style={styles.trackButton}
              onPress={() => onTrackPress(trackName)}
            >
              <Text style={styles.trackButtonText}>{trackName}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.musicPlayerContainer}>
        <View style={styles.trackInfo}>
          <Text style={styles.trackTitle}>{currentTrack || 'Select a Track'}</Text>
          <Text style={styles.trackArtist}>Chillpeach</Text>
        </View>

        <TouchableOpacity style={styles.controlButton} onPress={togglePlay}>
          <Text style={styles.buttonText}>{isPlaying ? 'Pause' : 'Play'}</Text>
        </TouchableOpacity>
      </View>

      <NavbarBottom navigation={navigation} />
    </View>
  );
};

export default LofiScreen;
