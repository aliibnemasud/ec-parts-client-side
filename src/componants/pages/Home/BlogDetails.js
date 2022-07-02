import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {

    const { blogsid } = useParams();
    const [blog, setBlog]= useState([]);

    const {img, title, desc} = blog;

    useEffect(() => {
        const url = `https://floating-dusk-82041.herokuapp.com/blogs/${blogsid}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])

    return (
        <div className='max-w-7xl mx-auto my-32'>
            <img className='w-1/2 mx-auto' src={img} alt="" />
            <h1 className='text-5xl my-10 text-center'>{title}</h1>
            <p className='text-center'>{desc}</p>
        </div>
    );
};

export default BlogDetails;