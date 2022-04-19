import React from 'react';
import ByType from './ByType';
import Explore from './Explore';
import FeaturedHotels from './FeaturedHotels';
import Header from './Header';
import Places from './Places';

const Home = () => {
    return (
        <div>
            <Header/>
            <ByType/>
            <Explore/>
            <Places/>
            <FeaturedHotels/>
        </div>
    );
};

export default Home;