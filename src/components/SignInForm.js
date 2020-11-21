import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';

import InputWrapper from './InputWrapper';
import TermsOfUse from './TermsOfUse';

const SignInForm = () => {
    const { values, handleChange, error, SignIn } = useContext(AuthContext);

    return (
        <form className='signForm' onSubmit={SignIn}>
            <h1 className='signForm__title'>Sign In</h1>

            {error.length !== 0 && <p className='signForm__error'>{error}</p>}

            <InputWrapper
                className='signForm'
                value={values.email}
                onChange={handleChange}
                type='email'
                id='email'
                name='email'
                minLength='5'
                maxLength='50'
                autoComplete='email'
                label='Email'
            />

            <InputWrapper
                className='signForm'
                value={values.password}
                onChange={handleChange}
                type='password'
                id='password'
                name='password'
                minLength='5'
                maxLength='50'
                autoComplete='password'
                label='Password'
            />

            <button className='signForm__btn'>Sign In</button>

            <p className='signForm__signNow'>
                New to Netflix? <Link to='/signup'>Sign up now</Link>
            </p>

            <TermsOfUse />
        </form>
    );
};

export default SignInForm;
