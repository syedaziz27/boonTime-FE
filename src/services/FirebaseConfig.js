import app from "firebase/app";
import "firebase/auth";

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
firebase.initializeApp(firebaseConfig);

export default app;