import React, { useState } from 'react';

const TermsOfUse = () => {
    const [isLearnMoreActive, setIsLearnMoreActive] = useState(false);

    return (
        <>
            <p className='signForm__termsOfUse'>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.
                {!isLearnMoreActive && (
                    <span onClick={() => setIsLearnMoreActive(true)}>
                        Learn More
                    </span>
                )}
            </p>

            {isLearnMoreActive && (
                <p className='signForm__termsOfUse signInForm__termsOfUse-hidden'>
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
        </>
    );
};

export default TermsOfUse;
