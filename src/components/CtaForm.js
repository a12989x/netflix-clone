import React from 'react';

import { ReactComponent as ChevronArrowRight } from '../img/icons/chevron-right-arrow.svg';

import InputWrapper from './InputWrapper';

const CtaForm = () => {
    return (
        <form className='ctaForm'>
            <h3 className='ctaForm__title'>
                Ready to watch? Enter your email to create or restart your
                membership.
            </h3>
            <InputWrapper
                className='ctaForm'
                value={''}
                onChange={''}
                type='email'
                id='email'
                minLength='5'
                maxLength='50'
                autoComplete={true}
                label='Email'
            />

            <button className='ctaForm__btn'>
                Start Here <ChevronArrowRight />
            </button>
        </form>
    );
};

export default CtaForm;
