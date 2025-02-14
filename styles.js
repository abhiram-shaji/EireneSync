//styles.js

import { StyleSheet } from 'react-native';
import theme from './theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primaryBackground,
    alignItems: 'center',
    justifyContent: 'flex-start', // Changed from 'center' to 'flex-start'
  },
  title: {
    color: theme.colors.headingText,
    fontSize: 20,
  },
  text: {
    color: theme.colors.bodyText,
    fontSize: 20,
  },
  button: {
    backgroundColor: theme.colors.buttonBackground,
    color: theme.colors.buttonText,
    width: '30%',
    fontSize: 20,
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },


  navbar: { // Top navbar
    position: 'absolute', // Add this to make navbar stick to the top
    top: 0, // Align navbar to the top of the screen
    flexDirection: 'row',
    width: '100%',
    height: '10%',
    backgroundColor: theme.colors.secondaryBackground,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 10,
    zIndex: 1, // Ensure navbar is above other content
  },
  bottomNavbar: {
    position: 'absolute', // Add this to make navbar stick to the bottom
    bottom: 0, // Align navbar to the bottom of the screen
    flexDirection: 'row',
    width: '100%',
    height: '10%',
    backgroundColor: theme.colors.secondaryBackground,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    zIndex: 1, // Ensure navbar is above other content
  },
  icon: {
    width: 60,
    height: 60,
  },

  //ToDo App styles
  textInput: {
    backgroundColor: theme.colors.textBackground,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: theme.colors.textBackground,
    borderRadius: 5,
  },

  //Jouranl App
  textInputJournal: {
    backgroundColor: theme.colors.textBackground,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    height: 100,
    textAlignVertical: 'top',
  },

  listItemJournal: {
    backgroundColor: theme.colors.textBackground,
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },

  //Settings Screen
  settingsContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: 200, // Set a specific width for all buttons
    margin: 10, // Add some margin between the buttons
  },

  //Pomodoro App
  timerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  timerText: {
    fontSize: 48,
    marginBottom: 20
  },

  //Login  Screen

  input: {
    width: '80%',
    height: 40,
    backgroundColor: theme.colors.textBackground,
    color: theme.colors.bodyText,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  loginContainer: {
    flex: 1,
    backgroundColor: theme.colors.primaryBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Music Player Styles
  musicPlayerContainer: {
    flex: 0,  // change this to 0 to wrap content
    backgroundColor: theme.colors.playerBackground,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 20,
    width: '100%',  // make sure it spans the width of the screen
    height: 'auto',  // ensure height is enough to wrap content
    position: 'absolute',  // add this to stick to the bottom
    bottom: 0,  // add this to stick to the bottom
    marginBottom: '20%',
  },

  controlButton: {
    backgroundColor: theme.colors.controlButton,
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },

  trackInfo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  trackTitle: {
    color: theme.colors.headingText,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  trackArtist: {
    color: theme.colors.bodyText,
    fontSize: 14,
  },

  trackListContainer: {
    flexDirection: 'row',  // or 'column' if you want a list
    flexWrap: 'wrap',  // allows items to wrap to the next line
    justifyContent: 'space-around',  // evenly space items horizontally
    alignItems: 'center',  // center items vertically
    padding: 10,
    marginTop: '20%',
  },

  trackButton: {
    backgroundColor: theme.colors.buttonBackground,
    padding: 10,
    margin: 5,
    borderRadius: 5,
    width: '40%',
    alignItems: 'center',
  },

  trackButtonText: {
    color: theme.colors.buttonText,
    fontSize: 14,
  },

  //Chatscreen
  chatContainer: {
    backgroundColor: theme.colors.playerBackground,
    padding: 20,
    marginTop: '20%',
    width: '100%',
    height: '80%', // This now should consider the space for inputContainer
    position: 'absolute', // This will stay as it helps to overlay on top of the screen
  },

  inputContainer: {
    flexDirection: 'row',
    padding: 8,
    backgroundColor: theme.colors.inputBackground,
    position: 'absolute',  // Add this to position the container
    bottom: 0,             // Anchor at the bottom
    left: 0,
    right: 0,
  },

  message: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 4,
    maxWidth: '80%',
  },
  messageOutgoing: {
    backgroundColor: theme.colors.messageOutgoingBackground,
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  messageIncoming: {
    backgroundColor: theme.colors.messageIncomingBackground,
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  messageText: {
    fontSize: 16,
    color: theme.colors.messageTextColor,
  },
  timestamp: {
    fontSize: 12,
    color: theme.colors.timestampColor,
    alignSelf: 'flex-end',
  },
  msgUser: {
    fontSize: 12,
    color: theme.colors.secondaryBackground,
    alignSelf: 'flex-start',
  },
  chatTextInput: {
    flex: 1,
    marginRight: 8,
    padding: 10,
    backgroundColor: theme.colors.inputBackground,
    color: theme.colors.inputText,
    borderRadius: 5,
  },

});
