import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {

    const [reviews, setReview] = useState([]);

    useEffect(()=> {
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReview(data))

    }, [])

    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-4xl text-center my-16 font-bold uppercase'>Customer <span className='text-primary'>Reviews</span></h1>

            <div className='grid grid-cols-3 gap-4'>
            {
                reviews.map(review => <Review key={review._id} review={review}></Review>)
            }
            </div>
        </div>
    );
};

export default Reviews;