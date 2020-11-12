import React from 'react';

import { ReactComponent as ChevronArrowRight } from '../img/icons/chevron-right-arrow.svg';

const CtaForm = () => {
    return (
        <form className='ctaForm'>
            <h3 className='ctaForm__title'>
                Ready to watch? Enter your email to create or restart your
                membership.
            </h3>
            <div className='ctaForm__inputWrapper inputWrapper'>
                <input
                    className='ctaForm__input'
                    type='email'
                    id='email'
                    minLength='5'
                    maxLength='50'
                    autoComplete='email'
                />
                <label className='ctaForm__label' htmlFor='email'>
                    Email Address
                </label>
            </div>

            <button className='ctaForm__btn'>
                Start Here <ChevronArrowRight />
            </button>
        </form>
    );
};

export default CtaForm;
