import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializeLoginFramework = () => {
    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}

export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
    .then(res => {
      const displayName = res.user?.displayName;
      const photoURL = res.user?.photoURL;
      const email = res.user?.email;

      const signedInUser = {
        isSignedIn: true,
        name: displayName,
        email: email,
        success: true,
        photo: photoURL,
      };
      return signedInUser;
    })
    .catch(err => {
      console.log(err);
      console.log(err.message);
      return err;
    })
  }

  export const handleSignOut = () => {
    return firebase.auth().signOut()
    .then(res => {
      const signedOutUser = {
        isSignedIn: false,
        name: '',
        email: '',
        photo: '',
        error: '',
        success: false
      }
      return signedOutUser;
    }).catch(err => {
      return err;
    });
  }

