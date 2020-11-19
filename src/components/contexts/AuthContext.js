import React, { useContext, createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { FirebaseContext } from './FirebaseContext';

import { useForm } from '../useForm';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [values, handleChange] = useForm({ email: '', password: '' });
    const [error, setError] = useState('');

    const SignIn = (e) => {
        e.preventDefault();

        firebase
            .auth()
            .signInWithEmailAndPassword(values.email, values.password)
            .then(() => history.push('/'))
            .catch((err) => setError(err.message));
    };

    return (
        <AuthContext.Provider value={{ values, handleChange, error, SignIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
