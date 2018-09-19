import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAjNiG7cswxCR6T9eJZI0Q7k3iD3GisKmY",
    authDomain: "ninja-smoothies-60ee1.firebaseapp.com",
    databaseURL: "https://ninja-smoothies-60ee1.firebaseio.com",
    projectId: "ninja-smoothies-60ee1",
    storageBucket: "ninja-smoothies-60ee1.appspot.com",
    messagingSenderId: "847901816188"
};

const firebaseApp = firebase.initializeApp(config);

firebaseApp.firestore().settings({
    timestampsInSnapshots: true
});

export default firebaseApp.firestore();