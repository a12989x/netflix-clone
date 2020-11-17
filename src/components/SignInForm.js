import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import InputWrapper from './InputWrapper';

const SignInForm = () => {
    const [isLearnMoreActive, setIsLearnMoreActive] = useState(false);

    return (
        <form className='signInForm'>
            <h1 className='signInForm__title'>Sign In</h1>

            <InputWrapper
                className='signInForm'
                value={''}
                onChange={''}
                type='email'
                id='email'
                minLength='5'
                maxLength='50'
                autoComplete='email'
                label='Email'
            />

            <InputWrapper
                className='signInForm'
                value={''}
                onChange={''}
                type='password'
                id='password'
                minLength='5'
                maxLength='50'
                autoComplete='password'
                label='Password'
            />

            <button className='signInForm__btn'>Sign In</button>

            <p className='signInForm__signUpNow'>
                New to Netflix? <Link to='/'>Sign up now</Link>
            </p>

            <p className='signInForm__termsOfUse'>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.{' '}
                {!isLearnMoreActive && (
                    <span onClick={() => setIsLearnMoreActive(true)}>
                        Learn More
                    </span>
                )}
            </p>

            {isLearnMoreActive && (
                <p className='signInForm__termsOfUse signInForm__termsOfUse-hidden'>
                    The information collected by Google reCAPTCHA is subject to
                    the Google
                    <a href='https://policies.google.com/privacy'>
                        Privacy Policy
                    </a>
                    and
                    <a href='https://policies.google.com/terms'>
                        Terms of Service
                    </a>
                    , and is used for providing, maintaining, and improving the
                    reCAPTCHA service and for general security purposes (it is
                    not used for personalized advertising by Google).
                </p>
            )}
        </form>
    );
};

export default SignInForm;
