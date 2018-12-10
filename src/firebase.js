import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';

firebase.initializeApp({
  authDomain: "messaging-mamo.firebaseapp.com",
  databaseURL: 'https://messaging-mamo.firebaseio.com',
  projectId: 'messaging-mamo',
  apiKey: "AIzaSyAz-vQfU3Pub_lJg4O9zcvKUcGiLzF2MqY",
});

if (process.env.NODE_ENV === 'development') {
  firebase.functions().useFunctionsEmulator('http://localhost:8081');
}

export default firebase.app();