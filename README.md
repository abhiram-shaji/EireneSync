**EireneSync Overview**

**What is EireneSync?**
EireneSync is more than your average focus app—it's a comprehensive tool designed to enhance productivity and interaction among students, featuring the classic Pomodoro technique and much more.

**Current Features**
- **Public Chat Room:** A vibrant space where students can connect and discuss academic or personal topics, fostering a sense of community.
- **Lofi Music Player:** Dive into your tasks with a curated playlist of lofi music, perfect for maintaining focus or unwinding.
- **ToDo List:** Efficiently manage your tasks and deadlines with a user-friendly to-do list feature, ensuring you stay on top of your responsibilities.
- **Journal:** Encourage self-reflection and track your daily achievements and thoughts with a personal journal, tailored for student life.
- **Pomodoro Timer:** Utilize the classic 25-minute Pomodoro timer to break your work into manageable intervals, promoting better productivity and mental health.

**Planned Enhancements**
- **Expanded Pomodoro Timer Options:** Enhance your focus sessions with additional customization options for the Pomodoro timer, catering to different working styles.
- **Customizable App Themes:** Personalize your app experience with various themes, making it visually appealing and enjoyable to use.
- **Subject-Specific Chat Rooms:** Introduce structured chat rooms based on different subjects or majors, creating targeted spaces for collaboration and discussion.



# Code

## App.js

Okay, let's see what we have here. So, at the very top of our file, we bring in the `React` library. Now, this is super important because it lets us use all the cool stuff that React offers in our component. Next up, we've got this `Navigation` import, coming from a local file called `./Navigation`. Seems like this `Navigation` guy is all about handling where we go in our app, kind of like a digital map.

Now, let's talk about our `App` component. It's a functional component, which is just a fancy way of saying it's a function that does all the component magic in React. And guess what? It's the star of the show, the main export of our file.

Inside this `App` component, there's not a whole lot going on, just returning the `Navigation` component. So basically, `App` is like the cozy house that holds the `Navigation` inside it. And whenever we use `App`, we're really seeing `Navigation` in action.

So, in a nutshell, `App.js` is the big boss of this React app, wrapping up the `Navigation` component, which is calling the shots on how we move around in the app. That is, `App.js` serves as the root component of this React application, encapsulating the `Navigation` component, which likely manages the top-level routing or layout of the application.

## Navigation

 **`Navigation.js`**:
   - Uses `@react-navigation/native` and `@react-navigation/native-stack` for the app’s navigation structure.
   - Imports screen components like `TodoScreen`, `FocusScreen`, etc.
   - Contains a `NavigationContainer` that wraps a `Stack.Navigator` for the navigation stack, starting with the "Login" screen.
   - Defines each app screen as a `Stack.Screen` with names and components, facilitating screen transitions.

 **`NavbarBottom.js`**:
   - Introduces a bottom navigation bar, `NavbarBottom`, with touchable icons for screen switching.
   - Icons lead to different screens like 'Todo', 'Focus', 'Journal', and 'Settings'.
   - Utilizes the `navigation` prop for managing navigation actions, dependent on React Navigation.

 **`NavbarTop.js`**:
   - Features a top navigation bar, `NavbarTop`, with icons and a central title "EireneSync".
   - Employs the `useNavigation` hook for accessing navigation functions.
   - Includes touchable elements for navigation to screens like 'Lofi' and 'Chat'.

In summary, these scripts orchestrate the navigation flow and layout in a React Native app, with `Navigation.js` setting up the main structure, and `NavbarBottom.js` and `NavbarTop.js` providing additional navigation controls at the bottom and top of the screen. Ta-da!

## Firebase

Okay, let's break it down into simpler points, focusing on the main parts of the React Native project with Firebase authentication.

 **`firebaseConfig.js`**:
   - Sets up Firebase for the React Native app.
   - Imports `initializeApp` from Firebase and has the project's config (`firebaseConfig`).
   - Initializes Firebase with `initializeApp(firebaseConfig)` and exports it for use elsewhere in the app.

 **`SignUpScreen` Component**:
   - Used for user sign-up, allowing new account creation.
   - Uses React `useState` for handling inputs: email, password, and confirmPassword.
   - `handleSignUp` function registers users with Firebase using their email and password, checking that the passwords match first.
   - After account creation, redirects to the 'Todo' screen.
   - Has input fields for email, password, confirmPassword, and a button to submit and sign up.

 **`LoginScreen` Component**:
   - Enables user login with email and password.
   - Also uses `useState` for managing email and password input states.
   - Includes `handleLogin` to authenticate via Firebase and navigate to the 'Todo' screen on success.
   - `handleSignUp` function directs to the `SignUpScreen` for account creation.
   - Features inputs for email, password, and buttons for login or to go to the sign-up screen.

These components are key for managing user sign-in and sign-up in the app, using Firebase's authentication services for handling the registration and login. Voilà!