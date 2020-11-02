import React from 'react';

import jumboData from '../../fixtures/jumbo.json';

import Jumbotron from '../Jumbotron';

const Home = () => {
    return (
        <div className='home'>
            {jumboData.map((item) => (
                <Jumbotron key={item.id} {...item} />
            ))}
        </div>
    );
};

export default Home;
