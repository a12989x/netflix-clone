import React, { useState, useContext, createContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import cookie from 'react-cookies';

import { FirebaseContext } from './FirebaseContext';

import { useForm } from '../useForm';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const history = useHistory();

    const { firebase } = useContext(FirebaseContext);
    const [user, setUser] = useState(cookie.load('user'));
    const [values, handleChange] = useForm({
        name: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState('');

    useEffect(() => {
        const listener = firebase.auth().onAuthStateChanged((authUser) => {
            if (authUser) {
                cookie.save('user', authUser, { path: '/', sameSite: true });
                setUser(authUser);
            } else {
                cookie.remove('authUser');
                setUser(null);
            }
        });

        return () => listener();
    }, []);

    const SignIn = (e) => {
        e.preventDefault();
        setError('');

        firebase
            .auth()
            .signInWithEmailAndPassword(values.email, values.password)
            .then(() => history.push('/'))
            .catch((err) => setError(err.message));
    };

    const SignUp = (e) => {
        e.preventDefault();
        setError('');

        firebase
            .auth()
            .createUserWithEmailAndPassword(values.email, values.password)
            .then((result) =>
                result.user
                    .updateProfile({
                        displayName: values.name,
                        photoURL: Math.floor(Math.random() * 5) + 1,
                    })
                    .then(() => history.push('/'))
            )
            .catch((err) => setError(err.message));
    };

    return (
        <AuthContext.Provider
            value={{ values, handleChange, user, error, SignIn, SignUp }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
