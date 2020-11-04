import React from 'react';

const Faq = ({ id, header, body, answerOpen, setAnswerOpen }) => {
    const handleClick = () => {
        if (answerOpen === id) setAnswerOpen(null);
        else setAnswerOpen(id);
    };

    return (
        <li className='faq'>
            <button className='faq__btn' onClick={handleClick}>
                {header}
                <svg
                    id='thin-x'
                    viewBox='0 0 19 19'
                    className={`faq__svg-icon ${
                        answerOpen === id ? 'faq__svg-icon-open' : ''
                    }`}
                    focusable='true'
                >
                    <path d='M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z'></path>
                </svg>
            </button>
            <p
                className={`faq__answer ${
                    answerOpen === id ? 'faq__answer-open' : ''
                }`}
            >
                <span>{body}</span>
            </p>
        </li>
    );
};

export default Faq;
