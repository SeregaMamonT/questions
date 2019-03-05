import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/storage';

firebase.initializeApp({
  authDomain: "messaging-mamo.firebaseapp.com",
  databaseURL: 'https://messaging-mamo.firebaseio.com',
  projectId: 'messaging-mamo',
  storageBucket: "messaging-mamo.appspot.com",
  apiKey: "AIzaSyAz-vQfU3Pub_lJg4O9zcvKUcGiLzF2MqY",
});

if (process.env.NODE_ENV === 'development') {
  firebase.functions().useFunctionsEmulator('http://localhost:8081');
}

export default firebase.app();
export {
  firebase as Firebase
};