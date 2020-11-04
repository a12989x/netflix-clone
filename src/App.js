import React from 'react';

import Home from './components/pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Footer from './components/Footer';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';

const App = () => {
    return (
        <div className='app'>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/signin' component={SignIn} />
                    <Route exact path='/signup' component={SignUp} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;
