import React from 'react';

import Home from './components/pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Footer from './components/Footer';

const App = () => {
    return (
        <div className='app'>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;
