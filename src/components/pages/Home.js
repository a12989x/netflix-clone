import React from 'react';

import jumboData from '../../fixtures/jumbo.json';

import Header from '../Header';
import Jumbotron from '../Jumbotron';
import Faqs from '../Faqs';

const Home = () => {
    return (
        <div className='home'>
            <Header />
            {jumboData.map((item) => (
                <Jumbotron key={item.id} {...item} />
            ))}
            <Faqs />
        </div>
    );
};

export default Home;
