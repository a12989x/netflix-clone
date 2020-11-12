import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import { seedDatabase } from '../seed';

const config = {
    apiKey: 'AIzaSyD6w1oZGjQLNVeJ4hNjj6DaslO2wsrU5yk',
    authDomain: 'ax-netflix-clone.firebaseapp.com',
    databaseURL: 'https://ax-netflix-clone.firebaseio.com',
    projectId: 'ax-netflix-clone',
    storageBucket: 'ax-netflix-clone.appspot.com',
    messagingSenderId: '888952633819',
    appId: '1:888952633819:web:6719baf8f8f21bca24cffe',
    measurementId: 'G-QL48NMH87V',
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
