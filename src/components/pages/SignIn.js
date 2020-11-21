import React from 'react';

import HomeBg from '../../img/misc/home-bg.jpg';
import { ReactComponent as Logo } from '../../img/misc/logo.svg';

import SignInForm from '../SignInForm';

const SignIn = () => {
    return (
        <div className='sign'>
            <img className='sign__imgBg' src={HomeBg} alt='home background' />
            <Logo className='sign__logo' />

            <SignInForm />
        </div>
    );
};

export default SignIn;
