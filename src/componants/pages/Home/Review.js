import React from 'react';

const Review = ({review}) => {
    const {name, desc, rating, img} = review;
    return (
        <div className="flex justify-between items-center p-10 shadow-xl rounded-lg bg-white">
            <div className="avatar mr-5">
                <div className="w-24 h-24 rounded-full">
                    <img src={img} alt='client'/>
                </div>
            </div>

            <div className="flex-1">
                <h2 className="text-xl font-bold">{name}</h2>
                <p className='my-5'>{desc.slice(0,20)}...</p>
                <h3 className='font-bold'>Rating: {rating}</h3>                
            </div>
        </div>
    );
};

export default Review;