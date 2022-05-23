import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>          
        </div>
    );
};

export default Home;