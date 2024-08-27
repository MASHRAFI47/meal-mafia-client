import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.init";
import axios from 'axios';


const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user)
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (fullName, image) => {
        return updateProfile(auth.currentUser, {
            displayName: fullName,
            photoURL: image
        }).then(() => {
            setUser({
                displayName: fullName,
                photoURL: image
            })
        })
    }

    const saveUser = async (user) => {
        const currentUser = {
            email: user?.email,
            fullName: user?.displayName,
            image: user?.photoURL,
            role: "guest",
            status: "verified",
            membership: "bronze",
        }

        const { data } = await axios.put(`${import.meta.env.VITE_api_url}/user`, currentUser);
        return data;
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            saveUser(currentUser)
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, []);

    const authInfo = { user, loading, createUser, updateUser, signInUser, logOut }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider