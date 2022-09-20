import {initializeApp} from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getReactNativePersistence, initializeAuth} from 'firebase/auth/react-native';


const firebaseConfig = {
    apiKey: "AIzaSyAVv2ALsp7yXgzAlujLQNCjagtJnxJMD1E",
    authDomain: "tinkoff-b4206.firebaseapp.com",
    projectId: "tinkoff-b4206",
    storageBucket: "tinkoff-b4206.appspot.com",
    messagingSenderId: "505047679624",
    appId: "1:505047679624:web:6eb3246b7fe726f53a553d"
};

// Initialize Firebase
//  const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);

const authMy = initializeAuth(initializeApp(firebaseConfig), {
    persistence: getReactNativePersistence(AsyncStorage)
});


export const auth = getAuth()

export const register = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password)

export const login = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password)

export const logout = () => signOut(auth)

export const db = getFirestore()

