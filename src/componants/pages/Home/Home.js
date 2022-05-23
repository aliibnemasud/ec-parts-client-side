import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Contactus from './Contactus';
import OurBlogs from './OurBlogs';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div>            
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <OurBlogs></OurBlogs>
            <Contactus></Contactus>                  
        </div>
    );
};

export default Home;