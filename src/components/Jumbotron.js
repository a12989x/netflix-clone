import React from 'react';

const Jumbotron = ({ id, title, subTitle, img, alt }) => {
    return (
        <section className='jumbotron'>
            <div className='jumbotron__container'>
                <h1 className='jumbotron__title'>{title}</h1>
                <h2 className='jumbotron__subTitle'>{subTitle}</h2>
                <img
                    className={`jumbotron__img ${
                        id === 2 ? 'jumbotron__img-reverse' : ''
                    }`}
                    src={img}
                    alt={alt}
                />
            </div>
        </section>
    );
};

export default Jumbotron;
