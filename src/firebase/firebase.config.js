// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCrRiNOWQBJqOP-Qbi8WaFLTCZC9RDUFC8",
    authDomain: "cv-bulider-application.firebaseapp.com",
    projectId: "cv-bulider-application",
    storageBucket: "cv-bulider-application.appspot.com",
    messagingSenderId: "800673253164",
    appId: "1:800673253164:web:ec0f28b4ac17c6f8308e89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;