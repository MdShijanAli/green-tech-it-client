import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, sendPasswordResetEmail, GoogleAuthProvider, sendEmailVerification } from "firebase/auth";
import app from '../../firebase/firebase.config';
import axios from 'axios';

export const AuthContext = createContext();

const auth = getAuth(app)


const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);
    // console.log(user)
    const [loading, setLoading] = useState(true);

    // console.log('authprovider', user)

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    const logOut = () => {
        setLoading(true);
        localStorage.removeItem('greenTechToken')
        return signOut(auth);

    }

    const verifyEmail = () => {
        setLoading(true)
        return sendEmailVerification(auth.currentUser)
    }

    const passResetEmail = (email) => {
        return sendPasswordResetEmail(auth, email)
    }




    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log('inside changed', currentUser);
            setUser(currentUser);


            setLoading(false);

        });
        return () => {
            unsubscribe();
        }



    }, [])

    const [blogs,setBlogs] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_apiUrl}/blogs`)
            .then(res => {
                setBlogs(res.data)
            })
            .catch(err => {
            console.log(err.message)
        })
    }, [])

    const [products,setProducts] = useState([])
    
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_apiUrl}/products`)
            .then(res => {
                setProducts(res.data)
            })
            .catch(err => {
            console.log(err.message)
        })
    }, [])
    
    const [users,setUsers] = useState([])
    
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_apiUrl}/users`)
            .then(res => {
                setUsers(res.data)
            })
            .catch(err => {
            console.log(err.message)
        })
    }, [])
    
    


    const authInfo = {
        createUser,
        signInGoogle,
        user,
        signIn,
        logOut,
        updateUserProfile,
        loading,
        setLoading,
        passResetEmail,
        verifyEmail,
        blogs,
        products,
        users


    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;