import firebase from 'firebase/app'
import 'firebase/auth'

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAs0uLlfmD3G01OtCxMvRM2OidZ2W9Fm0U",
    authDomain: "lovely-chat-a0db5.firebaseapp.com",
    projectId: "lovely-chat-a0db5",
    storageBucket: "lovely-chat-a0db5.appspot.com",
    messagingSenderId: "400364179366",
    appId: "1:400364179366:web:6da7713bcfd0e3ffbfc967"
}).auth()
