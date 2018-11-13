import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp({
  authDomain: "messaging-mamo.firebaseapp.com",
  databaseURL: 'https://messaging-mamo.firebaseio.com',
  projectId: 'messaging-mamo',
  apiKey: "AIzaSyAz-vQfU3Pub_lJg4O9zcvKUcGiLzF2MqY",
});

export default firebase.app();