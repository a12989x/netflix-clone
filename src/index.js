import React from 'react';
import { render } from 'react-dom';

import FirebaseContextProvider from './components/contexts/FirebaseContext';
import AuthContextProvider from './components/contexts/AuthContext';

import 'normalize.css';
import './styles/main.scss';

import App from './App';

render(
    <FirebaseContextProvider>
        <AuthContextProvider>
            <App />
        </AuthContextProvider>
    </FirebaseContextProvider>,
    document.getElementById('root')
);
