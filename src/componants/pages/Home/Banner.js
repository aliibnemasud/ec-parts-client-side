import React from 'react';
import Cycle from '../../../assets/img/cyclevector.png';
import PrimaryBtn from '../Shared/Buttons/PrimaryBtn';

const Banner = () => {
    return (
        <div className="hero my-32">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img className='ml-10 max-w-lg' src={Cycle} />
                <div>
                    <h3 className="text-3xl uppercase">Wecome to <span className='text-primary'>ECParts</span></h3>
                    <h1 className='text-6xl font-bold mt-6 mb-2 uppercase'>Bycycle spare parts</h1>
                    <h2 className='text-3xl mb-6 uppercase'>Incridible products with unbitable price</h2>
                    <PrimaryBtn>Get Started</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default Banner;