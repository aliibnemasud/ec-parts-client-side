import React from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryBtn from '../Shared/Buttons/PrimaryBtn';
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
            <Reviews></Reviews>
            <OurBlogs></OurBlogs>
            <Contactus></Contactus>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;