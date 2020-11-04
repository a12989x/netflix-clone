import React from 'react';

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
                Start Here
                <svg
                    className='ctaForm__chevronRightArrow'
                    viewBox='0 0 6 12'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <desc>chevron</desc>
                    <path
                        d='M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z'
                        fill='#ffffff'
                        fill-rule='evenodd'
                    ></path>
                </svg>
            </button>
        </form>
    );
};

export default CtaForm;
