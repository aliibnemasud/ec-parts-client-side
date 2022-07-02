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

    const navigate = useNavigate();

    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <div className="text-center">
                <button onClick={() => navigate('/shop')} className="btn btn-primary mt-5 text-center text-white" >Load More</button>
            </div>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <OurBlogs></OurBlogs>
            <Contactus></Contactus>
        </div>
    );
};

export default Home;