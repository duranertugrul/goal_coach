import * as firebase from 'firebase';


const config = {
  apiKey: "AIzaSyDPvW-olq24uRL5CbI4eyeEfTXaTmKxmpU",
  authDomain: "goalcoach-22ac7.firebaseapp.com",
  databaseURL: "https://goalcoach-22ac7.firebaseio.com",
  projectId: "goalcoach-22ac7",
  storageBucket: "",
  messagingSenderId: "828818940689"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
