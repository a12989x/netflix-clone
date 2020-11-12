import React from 'react';
import { Link } from 'react-router-dom';

import HomeBg from '../img/misc/home-bg.jpg';
import { ReactComponent as Logo } from '../img/misc/logo.svg';

import CtaForm from './CtaForm';

const Header = () => {
    return (
        <header className='header'>
            <img className='header__imgBg' src={HomeBg} alt='home background' />
            <nav className='header__nav'>
                <Logo className='header__logo' />{' '}
                <Link to='/sign-in'>
                    <button>Sign In</button>
                </Link>
            </nav>

            <section className='header__main'>
                <h1 className='header__title'>
                    Unlimited movies, TV shows, and more.
                </h1>
                <h2 className='header__subtitle'>
                    Watch anywhere. Cancel anytime.
                </h2>
                <CtaForm />
            </section>
        </header>
    );
};

export default Header;
