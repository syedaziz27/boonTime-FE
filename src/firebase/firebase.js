import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCVovLPRrD86SJj89ymQoTFTkWI9IGXzwA",
    authDomain: "boontime.firebaseapp.com",
    databaseURL: "https://boontime.firebaseio.com",
    projectId: "boontime",
    storageBucket: "boontime.appspot.com",
    messagingSenderId: "443854954638",
    appId: "1:443854954638:web:08e2bec9c92865c67669df"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error)
        }
    }

    return userRef

}

firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
// Initialize Firebase
