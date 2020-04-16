import * as firebase from 'firebase';
import 'firebase/firestore';
require('firebase/auth');
import {firebaseCredentials} from '../constants/credentials';

firebase.initializeApp(firebaseCredentials);
export const firebaseAuth = firebase.auth();
export const firestore = firebase.firestore();
export const database = firebase.database();
// All functions regarding firebase will be made here and export from here
