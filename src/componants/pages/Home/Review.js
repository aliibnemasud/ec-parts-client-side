import React from 'react';

const Review = ({review}) => {
    const {name, desc, rating, img} = review;
    return (

        <div className="flex justify-between items-center p-10 shadow-xl rounded-lg">
            <div className="avatar mr-5">
                <div className="w-24 h-24 rounded-full">
                    <img src={img} />
                </div>
            </div>

            <div className="flex-1">
                <h2 className="text-3xl text-primary">{name}</h2>
                <p>{desc}</p>
                <h3>Rating: {rating}</h3>                
            </div>
        </div>
    );
};

export default Review;