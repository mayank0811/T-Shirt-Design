import firebase from 'firebase/app';
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCpFu-l4qLwbCTcU_sd3RThX_VXBpvGx8Y",
    authDomain: "designapp-b4704.firebaseapp.com",
    projectId: "designapp-b4704",
    storageBucket: "designapp-b4704.appspot.com",
    messagingSenderId: "518957955671",
    appId: "1:518957955671:web:b25a0b5125f6a7f86f8112",
    measurementId: "G-W8ZKN4VMGX"
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export {
    storage , firebase as default
}