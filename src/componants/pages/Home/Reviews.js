import React, { useEffect, useState } from 'react';
import Review from './Review';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './home.css';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../Shared/Loading/Loading';

const Reviews = () => {

    const {isLoading, data} = useQuery(["reviews"],() => axios.get('https://ec-cycle-parts.onrender.com/tools'));   

    if (isLoading) {
        return <Loading />
    }
    const reviews = data?.data;
    
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