import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCadMjRoUpzYmhRxKerTdAUuRPMVSDbzt4",
    authDomain: "news-blog-e422b.firebaseapp.com",
    projectId: "news-blog-e422b",
    storageBucket: "news-blog-e422b.appspot.com",
    messagingSenderId: "70722186005",
    appId: "1:70722186005:web:390e2f0fba8a02a68cd71c"
};

firebase.initializeApp(firebaseConfig);

export default firebase;