import React from 'react';
import { Link } from 'react-router-dom';

import HomeBg from '../../img/misc/home-bg.jpg';
import { ReactComponent as Logo } from '../../img/misc/logo.svg';

import SignInForm from '../SignInForm';

const SignIn = () => {
    return (
        <div className='signIn'>
            <img className='signIn__imgBg' src={HomeBg} alt='home background' />
            <Logo className='signIn__logo' />

            <SignInForm />
        </div>
    );
};

export default SignIn;
