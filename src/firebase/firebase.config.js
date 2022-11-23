// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAeiyFQ8p4A9XH72ltewkLwX1vVogoKoiU",
    authDomain: "green-tech-it.firebaseapp.com",
    projectId: "green-tech-it",
    storageBucket: "green-tech-it.appspot.com",
    messagingSenderId: "315607154656",
    appId: "1:315607154656:web:cb5043f6f4d4468c2b7585"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;