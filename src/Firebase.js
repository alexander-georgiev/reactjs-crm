import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const config = {
  apiKey: "AIzaSyDNJpjt9_IaI-FKEpuW3pVWxo_6V6XTSWM",
    authDomain: "personal-website-156914.firebaseapp.com",
    databaseURL: "https://personal-website-156914.firebaseio.com",
    projectId: "personal-website-156914",
    storageBucket: "gs://personal-website-156914.appspot.com",
    messagingSenderId: "179474896816"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;