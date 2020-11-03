import React from 'react';

import jumboData from '../../fixtures/jumbo.json';
import Faqs from '../Faqs';

import Jumbotron from '../Jumbotron';

const Home = () => {
    return (
        <div className='home'>
            {jumboData.map((item) => (
                <Jumbotron key={item.id} {...item} />
            ))}
            <Faqs />
        </div>
    );
};

export default Home;
