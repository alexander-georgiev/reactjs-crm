//import * as firebase from 'firebase';
import {
    BehaviorSubject
} from 'rxjs';

function authstatechange() {
    firebase.auth().onAuthStateChanged(function(user) {
        console.log('Logged user', user);
        if (user) {
            localStorage.setItem('currentUser', 'true');
            self.setFBTokenInCookie(user.ra);
        } else {
            localStorage.removeItem('currentUser');
        }
        self.loggedUserData = user;
        // localStorage.setItem('loggedUserData', JSON.stringify(self.loggedUserData));
        self.currentUserSubject.next(localStorage.getItem('currentUser'));
    });
}
if (typeof window !== 'undefined') {
    const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')))
}

export const authenticationService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() {
      return currentUserSubject.value
    }
};

function login(username, password) {

}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}