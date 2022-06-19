import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBOnSLdeiMJtP0T8teYPqnaE0dFTebDSZk",
    authDomain: "e-library-443ea.firebaseapp.com",
    projectId: "e-library-443ea",
    storageBucket: "e-library-443ea.appspot.com",
    messagingSenderId: "108640125052",
    appId: "1:108640125052:web:d951bea5cc66a45d1489f9"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();