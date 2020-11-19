import React, { createContext } from 'react';

import { firebase } from '../../lib/firebase.prod';

export const FirebaseContext = createContext();

const FirebaseContextProvider = ({ children }) => {
    return (
        <FirebaseContext.Provider value={{ firebase }}>
            {children}
        </FirebaseContext.Provider>
    );
};

export default FirebaseContextProvider;
