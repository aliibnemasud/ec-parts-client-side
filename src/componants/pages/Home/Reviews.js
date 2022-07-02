import React, { useEffect, useState } from 'react';
import Review from './Review';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Reviews = () => {

    const [reviews, setReview] = useState([]);

    useEffect(() => {
        fetch('https://floating-dusk-82041.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReview(data))

    }, [])

    return (
        <div className='max-w-7xl mx-auto my-32'>
            <h1 className='text-4xl text-center my-16 font-bold uppercase'>Customer <span className='text-primary'>Reviews</span></h1>


            <Swiper className='max-w-7xl mx-auto'
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }} >
                    
                {
                    reviews.map(review => <SwiperSlide> <Review key={review._id} review={review}></Review> </SwiperSlide>)
                }
            </Swiper>        
        </div>
    );
};

export default Reviews;