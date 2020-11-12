import React from 'react';
import { render } from 'react-dom';

import FirebaseContextProvider from './components/contexts/FirebaseContext';

import 'normalize.css';
import './styles/main.scss';

import App from './App';

render(
    <FirebaseContextProvider>
        <App />
    </FirebaseContextProvider>,
    document.getElementById('root')
);
