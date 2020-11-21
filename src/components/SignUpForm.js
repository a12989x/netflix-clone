import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';

import InputWrapper from './InputWrapper';
import TermsOfUse from './TermsOfUse';

const SignUpForm = () => {
    const { values, handleChange, error, SignUp } = useContext(AuthContext);

    return (
        <form className='signForm' onSubmit={SignUp}>
            <h1 className='signForm__title'>Sign Up</h1>

            {error.length !== 0 && <p className='signForm__error'>{error}</p>}

            <InputWrapper
                className='signForm'
                value={values.name}
                onChange={handleChange}
                type='text'
                id='name'
                name='name'
                minLength='5'
                maxLength='50'
                autoComplete='name'
                label='Name'
            />

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

            <button className='signForm__btn'>Sign Up</button>

            <p className='signForm__signNow'>
                Already a user? <Link to='/signin'>Sign in now</Link>
            </p>

            <TermsOfUse />
        </form>
    );
};

export default SignUpForm;
