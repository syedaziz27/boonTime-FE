import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEzNhMRnlx5apWuFkAvN1XT0ImSAHAu-M",
  authDomain: "boontime-aeab0.firebaseapp.com",
  databaseURL: "https://boontime-aeab0.firebaseio.com",
  projectId: "boontime-aeab0",
  storageBucket: "boontime-aeab0.appspot.com",
  messagingSenderId: "226237720216",
  appId: "1:226237720216:web:63fa080b5dae05ec8d12ed",
  measurementId: "G-N90T6CBV5P"
};
// Initialize Firebase
app.initializeApp(firebaseConfig);

export default app;



// firebaseServices.createUserProfileDocument = async (userAuth, additionalData) => {
//     if (!userAuth) return;

//     const userRef = firestore.doc(`users/${userAuth.uid}`);
//     const snapShot = await userRef.get();

//     if (!snapShot.exists) {
//         const {
//             displayName,
//             email
//         } = userAuth;
//         const createdAt = new Date();

//         try {
//             await userRef.set({
//                 displayName,
//                 email,
//                 createdAt,
//                 ...additionalData
//             })
//         } catch (error) {
//             console.log('error creating user', error)
//         }
//     }

//     return userRef

// }

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({
//     prompt: 'select_account'
// })
// export const signInWithGoogle = () => auth.signInWithPopup(provider);