import * as firebase from 'firebase';
import firestore from 'firebase/firestore'
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyDNJpjt9_IaI-FKEpuW3pVWxo_6V6XTSWM",
    authDomain: "personal-website-156914.firebaseapp.com",
    databaseURL: "https://personal-website-156914.firebaseio.com",
    projectId: "personal-website-156914",
    storageBucket: "gs://personal-website-156914.appspot.com",
    messagingSenderId: "179474896816"
};
if (!firebase.apps.length) {
    try {
        firebase.initializeApp(config)
        var self = this;
        firebase.auth().onAuthStateChanged(function(user) {
          self.setState({ user: user });
        });
    } catch (err) {
        console.error('Firebase initialization error raised', err.stack)
    }
}
// class Firebase {
//     constructor() {
//         app.initializeApp(config);
//         this.auth = app.auth();
//     }
//     doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);
//     doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);
//     doSignOut = () => this.auth.signOut();
//     doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
//     doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
// }
// firebase.firestore().settings(settings);
export default firebase;