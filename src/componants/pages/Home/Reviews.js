import React, { useEffect, useState } from 'react';
import Review from './Review';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './home.css';

const Reviews = () => {
    const [reviews, setReview] = useState([]);
    useEffect(() => {
        fetch('https://floating-dusk-82041.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    return (
        <div className="review flex justify-center items-center">
            <div className='max-w-7xl mx-auto'>
                <h1 className='text-4xl text-center mb-16 font-bold uppercase text-white'>Customer Reviews </h1>


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
        </div>

    );
};

export default Reviews;