import React, { useContext } from 'react';

import Home from './components/pages/Home';
import { BrowserRouter, Switch } from 'react-router-dom';

import { AuthContext } from './components/contexts/AuthContext';
import { RedirectRoute } from './components/helpers/routes';

import Footer from './components/Footer';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Browse from './components/pages/Browse';

const App = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className='app'>
            <BrowserRouter>
                <Switch>
                    <RedirectRoute
                        user={user}
                        exact
                        path={'/'}
                        signPath={'/browse'}
                    >
                        <Home />
                    </RedirectRoute>

                    <RedirectRoute
                        user={user}
                        exact
                        path={'/signin'}
                        signPath={'/browse'}
                    >
                        <SignIn />
                    </RedirectRoute>

                    <RedirectRoute
                        user={user}
                        exact
                        path={'/signup'}
                        signPath={'/browse'}
                    >
                        <SignUp />
                    </RedirectRoute>

                    <RedirectRoute
                        user={!user}
                        exact
                        path={'/browse'}
                        signPath={'/signin'}
                    >
                        <Browse />
                    </RedirectRoute>
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;
