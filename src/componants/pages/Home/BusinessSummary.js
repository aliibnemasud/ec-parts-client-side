import React from 'react';
import icon from '../../../assets/icons/message-circle-dots.png';
import icon2 from '../../../assets/icons/send-2.png';
import icon3 from '../../../assets/icons/user-check.png';
import icon4 from '../../../assets/icons/users-more.png';
import PrimaryBtn from '../Shared/Buttons/PrimaryBtn';
import BusinessSummaryDetail from './BusinessSummaryDetail';

const BusinessSummary = () => {

    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-4xl text-center my-16 font-bold uppercase'>Business <span className='text-primary'>Summary</span></h1>

            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>

                <BusinessSummaryDetail icon={icon} total="550+" service="Successfully Delivered"></BusinessSummaryDetail>
                <BusinessSummaryDetail icon={icon2} total="450+" service="Happy Clients"></BusinessSummaryDetail>
                <BusinessSummaryDetail icon={icon3} total="300+" service="Repeat Customer"></BusinessSummaryDetail>
                <BusinessSummaryDetail icon={icon4} total="400+" service="Positive Feedback"></BusinessSummaryDetail>
            </div>           

            <div className='flex flex-wrap justify-between shadow-xl items-center px-10 py-5 my-16 rounded-lg'>
                <h1 className='text-3xl font-bold uppercase'>If you have any question,, Let  us know.</h1>
                <PrimaryBtn>Get Started</PrimaryBtn>
            </div>

        </div>
    );
};

export default BusinessSummary;